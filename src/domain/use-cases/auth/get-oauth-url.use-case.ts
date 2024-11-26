import { OAuthProviderDto } from '../../../application';

export type GetOAuthUrlUseCaseResp = string;

export interface GetOAuthUrlUseCase {
  execute(oauthProviderDto: OAuthProviderDto): GetOAuthUrlUseCaseResp;
}
