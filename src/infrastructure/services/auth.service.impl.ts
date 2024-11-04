import {
  AuthRepository,
  AuthService,
  CustomError,
  GoogleOAuthResponse,
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
    const { data, error } = await AxiosAdapter.post<GoogleOAuthResponse>('https://oauth2.googleapis.com/token', {
      code,
      client_id: envs.GOOGLE_CLIENT_ID,
      client_secret: envs.GOOGLE_CLIENT_SECRET,
      redirect_uri: envs.GOOGLE_CALLBACK_URL,
      grant_type: 'authorization_code',
    });

    if (error) throw CustomError.internalServer('Error getting google token');

    const payload = await JWTAdapter.decodeToken<GoogleUserFromToken>(data!.id_token);
    if (!payload) throw CustomError.unAuthorized('Invalid google token');

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
}
