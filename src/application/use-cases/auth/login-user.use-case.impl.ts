import { AuthRepository, CustomError, LoginUserUseCase, LoginUserUseCaseResp, SignToken } from '../../../domain';
import { JWTAdapter } from '../../../infrastructure';
import { LoginUserDto } from '../..';

export class LoginUserUseCaseImpl implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JWTAdapter.generateToken,
  ) {}

  async execute(loginUserDto: LoginUserDto): LoginUserUseCaseResp {
    const user = await this.authRepository.loginUser(loginUserDto);

    const token = await this.signToken({ user_id: user.user_id });
    if (!token) throw CustomError.internalServer('Error generating token');

    return { access_token: token };
  }
}
