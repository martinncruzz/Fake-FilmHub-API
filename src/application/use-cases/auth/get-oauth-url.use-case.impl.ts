import { BuildOAuthUrl, GetOAuthUrlUseCase, GetOAuthUrlUseCaseResp } from '../../../domain';
import { OAuthProviderDto, OAuthUrlBuilder } from '../..';

export class GetOAuthUrlUseCaseImpl implements GetOAuthUrlUseCase {
  constructor(private readonly buildOAuthUrl: BuildOAuthUrl = OAuthUrlBuilder.build) {}

  execute(oauthProviderDto: OAuthProviderDto): GetOAuthUrlUseCaseResp {
    const url = this.buildOAuthUrl(oauthProviderDto.provider);
    return { url };
  }
}
