import { UserEntity } from '..';

export abstract class AuthService {
  abstract authenticateWithGoogle(code: string): Promise<UserEntity>;
  abstract authenticateWithFacebook(code: string): Promise<UserEntity>;
}
