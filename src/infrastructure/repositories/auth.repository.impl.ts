import { AuthDatasource, AuthRepository, UserEntity } from '../../domain';
import { CheckUserEmailDto, LoginUserDto, RegisterUserDto } from '../../application';
import { AuthDatasourceImpl } from '..';

export class AuthRepositoryImpl implements AuthRepository {
  private static _instance: AuthRepositoryImpl;

  private constructor(private readonly authDatasource: AuthDatasource) {}

  static get instance(): AuthRepositoryImpl {
    if (!this._instance) {
      const authDatasource = AuthDatasourceImpl.instance;
      this._instance = new AuthRepositoryImpl(authDatasource);
    }

    return this._instance;
  }

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
