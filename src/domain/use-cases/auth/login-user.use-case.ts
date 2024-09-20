import { AuthRepository, CustomError, LoginUserDto } from "../..";
import { JWTAdapter } from "../../../config";

interface LoginUserUseCaseResponse {
  access_token: string;
}

type SignToken = (
  payload: Record<string, any>,
  duration?: string
) => Promise<string | null>;

interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): Promise<LoginUserUseCaseResponse>;
}

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JWTAdapter.generateToken
  ) {}

  async execute(loginUserDto: LoginUserDto): Promise<LoginUserUseCaseResponse> {
    const user = await this.authRepository.loginUser(loginUserDto);

    const token = await this.signToken({ user_id: user.user_id });
    if (!token) throw CustomError.internalServer("Error generating token");

    return { access_token: token };
  }
}
