import { AuthRepository, RegisterUserDto, UserEntity } from "../..";

interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}

export class RegisterUserUseCaseImpl implements RegisterUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const user = await this.authRepository.registerUser(registerUserDto);
    return user;
  }
}
