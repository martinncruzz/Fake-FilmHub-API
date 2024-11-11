import { CustomError, OAuthProvider } from '../../domain';
import { envs } from '../../infrastructure';

export class OAuthUrlBuilder {
  static build(provider: OAuthProvider): string {
    const { rootUrl, options } = OAuthUrlBuilder.getProviderOptions(provider);
    const queryString = new URLSearchParams(options);
    return `${rootUrl}?${queryString.toString()}`;
  }

  private static getProviderOptions(provider: OAuthProvider): { rootUrl: string; options: Record<string, any> } {
    switch (provider) {
      case OAuthProvider.GOOGLE:
        return OAuthUrlBuilder.getGoogleOptions();
      case OAuthProvider.FACEBOOK:
        return OAuthUrlBuilder.getFacebookOptions();
      default:
        throw CustomError.badRequest('Unhandled provider');
    }
  }

  private static getGoogleOptions(): { rootUrl: string; options: Record<string, any> } {
    return {
      rootUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      options: {
        redirect_uri: envs.GOOGLE_CALLBACK_URL,
        client_id: envs.GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email',
        ].join(' '),
      },
    };
  }

  private static getFacebookOptions(): { rootUrl: string; options: Record<string, any> } {
    return {
      rootUrl: 'https://www.facebook.com/v21.0/dialog/oauth',
      options: {
        client_id: envs.FACEBOOK_CLIENT_ID,
        redirect_uri: envs.FACEBOOK_CALLBACK_URL,
        response_type: 'code',
      },
    };
  }
}
