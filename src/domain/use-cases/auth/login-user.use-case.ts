import { AuthRepository, CustomError, LoginUserDto, LoginUserUseCase, LoginUserUseCaseResp, SignToken } from '../..';
import { JWTAdapter } from '../../../config';

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
