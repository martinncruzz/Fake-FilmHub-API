import { AuthRepository, CheckUserEmailDto } from "../..";

interface CheckEmailAvailabilityUseCaseResponse {
  isAvailable: boolean;
}

interface CheckEmailAvailabilityUseCase {
  execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<CheckEmailAvailabilityUseCaseResponse>;
}

export class CheckEmailAvailability implements CheckEmailAvailabilityUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<CheckEmailAvailabilityUseCaseResponse> {
    const isAvailable = await this.authRepository.checkEmailAvailability(
      checkUserEmailDto
    );
    return { isAvailable };
  }
}
