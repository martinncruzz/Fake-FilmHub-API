import { LoginUserDto, RegisterUserDto } from '../../application';
import { UserEntity } from '..';

export abstract class AuthRepository {
  abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>;
  abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>;
}
