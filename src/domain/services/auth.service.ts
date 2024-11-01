import { UserEntity } from '..';

export abstract class AuthService {
  abstract authenticateWithGoogle(code: string): Promise<UserEntity>;
}
