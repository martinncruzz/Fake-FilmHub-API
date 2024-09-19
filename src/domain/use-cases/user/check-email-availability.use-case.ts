import { CheckUserEmailDto, UserRepository } from "../..";

interface CheckEmailAvailabilityUseCaseResponse {
  isAvailable: boolean;
}

interface CheckEmailAvailabilityUseCase {
  execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<CheckEmailAvailabilityUseCaseResponse>;
}

export class CheckEmailAvailability implements CheckEmailAvailabilityUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<CheckEmailAvailabilityUseCaseResponse> {
    const isAvailable = await this.userRepository.checkEmailAvailability(
      checkUserEmailDto
    );
    return { isAvailable };
  }
}
