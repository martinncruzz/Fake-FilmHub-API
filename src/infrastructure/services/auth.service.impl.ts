import {
  AuthRepository,
  AuthService,
  CustomError,
  FacebookUserFromToken,
  GoogleUserFromToken,
  UserEntity,
  UserRepository,
} from '../../domain';
import { AuthRepositoryImpl, AxiosAdapter, envs, JWTAdapter, UserRepositoryImpl } from '..';

export class AuthServiceImpl implements AuthService {
  private static _instance: AuthServiceImpl;

  private constructor(
    private readonly userRepository: UserRepository,
    private readonly authRepository: AuthRepository,
  ) {}

  static get instance(): AuthServiceImpl {
    if (!this._instance) {
      const userRepository = UserRepositoryImpl.instance;
      const authRepository = AuthRepositoryImpl.instance;

      this._instance = new AuthServiceImpl(userRepository, authRepository);
    }

    return this._instance;
  }

  async authenticateWithGoogle(code: string): Promise<UserEntity> {
    const { data, error } = await AxiosAdapter.post<{ id_token: string }>('https://oauth2.googleapis.com/token', {
      code,
      client_id: envs.GOOGLE_CLIENT_ID,
      client_secret: envs.GOOGLE_CLIENT_SECRET,
      redirect_uri: envs.GOOGLE_CALLBACK_URL,
      grant_type: 'authorization_code',
    });

    if (error) throw CustomError.internalServer('Error getting Google token');

    const payload = await JWTAdapter.decodeToken<GoogleUserFromToken>(data!.id_token);
    if (!payload) throw CustomError.unAuthorized('Invalid Google token');

    let user = await this.userRepository.getUserByEmail({ email: payload.email });

    if (!user) {
      user = await this.authRepository.registerUser({
        fullname: payload.name,
        email: payload.email,
        avatar: payload.picture,
        password: 'oauth',
      });
    } else {
      user = await this.userRepository.updateUser({
        user_id: user.user_id,
        fullname: payload.name,
        avatar: payload.picture,
      });
    }

    return user;
  }

  async authenticateWithFacebook(code: string): Promise<UserEntity> {
    const { data, error } = await AxiosAdapter.post<{ access_token: string }>(
      'https://graph.facebook.com/v10.0/oauth/access_token',
      {
        code,
        client_id: envs.FACEBOOK_CLIENT_ID,
        client_secret: envs.FACEBOOK_CLIENT_SECRET,
        redirect_uri: envs.FACEBOOK_CALLBACK_URL,
      },
    );

    if (error) throw CustomError.internalServer('Error getting Facebook token');

    const { data: userData, error: userError } = await AxiosAdapter.get<FacebookUserFromToken>(
      `https://graph.facebook.com/me?fields=name,email,picture&access_token=${data!.access_token}`,
    );

    if (userError) throw CustomError.internalServer('Error getting Facebook user data');

    let user = await this.userRepository.getUserByEmail({ email: userData!.email });

    if (!user) {
      user = await this.authRepository.registerUser({
        fullname: userData!.name,
        email: userData!.email,
        avatar: userData!.picture.data.url,
        password: 'oauth',
      });
    } else {
      user = await this.userRepository.updateUser({
        user_id: user.user_id,
        fullname: userData!.name,
        avatar: userData!.picture.data.url,
      });
    }

    return user;
  }
}
