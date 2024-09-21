import { AuthRepository, CheckUserEmailDto } from "../..";

interface IsEmailAvailableUseCaseResponse {
  isAvailable: boolean;
}

interface IsEmailAvailableUseCase {
  execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<IsEmailAvailableUseCaseResponse>;
}

export class IsEmailAvailableUseCaseImpl implements IsEmailAvailableUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<IsEmailAvailableUseCaseResponse> {
    const isAvailable = await this.authRepository.isEmailAvailable(
      checkUserEmailDto
    );
    return { isAvailable };
  }
}
