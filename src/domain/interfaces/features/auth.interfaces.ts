export interface GoogleUserFromToken {
  email: string;
  name: string;
  picture: string;
}

export interface FacebookUserFromToken {
  name: string;
  email: string;
  picture: { data: { url: string } };
}
