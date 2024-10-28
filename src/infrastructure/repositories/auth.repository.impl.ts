import { AuthDatasource, AuthRepository, UserEntity } from '../../domain';
import { CheckUserEmailDto, LoginUserDto, RegisterUserDto } from '../../application';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDatasource.registerUser(registerUserDto);
  }

  loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDatasource.loginUser(loginUserDto);
  }

  isEmailAvailable(checkUserEmailDto: CheckUserEmailDto): Promise<UserEntity | null> {
    return this.authDatasource.isEmailAvailable(checkUserEmailDto);
  }
}
