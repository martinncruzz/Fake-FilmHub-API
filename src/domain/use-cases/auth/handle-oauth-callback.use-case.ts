import { OAuthCallbackDto, OAuthProviderDto } from '../../../application';

export type HandleOAuthCallbackUseCaseResp = Promise<{ access_token: string }>;

export interface HandleOAuthCallbackUseCase {
  execute(oauthProviderDto: OAuthProviderDto, oauthCallbackDto: OAuthCallbackDto): HandleOAuthCallbackUseCaseResp;
}
