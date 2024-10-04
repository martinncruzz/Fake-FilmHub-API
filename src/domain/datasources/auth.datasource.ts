import { CheckUserEmailDto, LoginUserDto, RegisterUserDto, UserEntity } from '..';

export abstract class AuthDatasource {
  abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>;
  abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>;
  abstract isEmailAvailable(checkUserEmailDto: CheckUserEmailDto): Promise<boolean>;
}
