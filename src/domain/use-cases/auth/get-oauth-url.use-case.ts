import { OAuthProviderDto } from '../../../application';

export type GetOAuthUrlUseCaseResp = { url: string };

export interface GetOAuthUrlUseCase {
  execute(oauthProviderDto: OAuthProviderDto): GetOAuthUrlUseCaseResp;
}
