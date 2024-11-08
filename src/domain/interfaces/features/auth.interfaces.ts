export interface GoogleOAuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}

export interface GoogleUserFromToken {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}

export interface FacebookUserFromToken {
  name: string;
  email: string;
  picture: { data: { url: string } };
}
