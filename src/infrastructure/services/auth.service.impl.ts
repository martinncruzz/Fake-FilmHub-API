import {
  AuthRepository,
  AuthService,
  CustomError,
  GoogleOAuthResponse,
  GoogleUserFromToken,
  UserEntity,
} from '../../domain';
import { AxiosAdapter, envs, JWTAdapter } from '..';

export class AuthServiceImpl implements AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

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

    let user = await this.authRepository.isEmailAvailable({ email: payload.email });

    if (!user) {
      user = await this.authRepository.registerUser({
        fullname: payload.name,
        email: payload.email,
        avatar: payload.picture,
        password: 'oauth_google',
      });
    }

    return user;
  }
}
