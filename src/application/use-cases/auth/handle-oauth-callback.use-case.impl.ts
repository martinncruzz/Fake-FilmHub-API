import {
  AuthService,
  CustomError,
  HandleOAuthCallbackUseCase,
  HandleOAuthCallbackUseCaseResp,
  OAuthProvider,
  SignToken,
  UserEntity,
} from '../../../domain';
import { JWTAdapter } from '../../../infrastructure';
import { OAuthCallbackDto, OAuthProviderDto } from '../..';

export class HandleOAuthCallbackUseCaseImpl implements HandleOAuthCallbackUseCase {
  constructor(
    private readonly authService: AuthService,
    private readonly signToken: SignToken = JWTAdapter.generateToken,
  ) {}

  async execute(
    oauthProviderDto: OAuthProviderDto,
    oauthCallbackDto: OAuthCallbackDto,
  ): HandleOAuthCallbackUseCaseResp {
    const { provider } = oauthProviderDto;
    const { code } = oauthCallbackDto;
    let user: UserEntity;

    switch (provider) {
      case OAuthProvider.GOOGLE:
        user = await this.authService.authenticateWithGoogle(code);
        break;
      case OAuthProvider.FACEBOOK:
        user = await this.authService.authenticateWithFacebook(code);
        break;
      default:
        throw CustomError.badRequest('Unhandled provider');
    }

    const token = await this.signToken({ user_id: user.user_id });
    if (!token) throw CustomError.internalServer('Error generating token');

    return { access_token: token };
  }
}
