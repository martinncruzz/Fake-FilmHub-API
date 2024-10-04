import {
  AuthDatasource,
  AuthRepository,
  CheckUserEmailDto,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from '../../domain';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDatasource.registerUser(registerUserDto);
  }

  loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDatasource.loginUser(loginUserDto);
  }

  isEmailAvailable(checkUserEmailDto: CheckUserEmailDto): Promise<boolean> {
    return this.authDatasource.isEmailAvailable(checkUserEmailDto);
  }
}
