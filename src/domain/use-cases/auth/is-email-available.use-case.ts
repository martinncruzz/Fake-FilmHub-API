import { AuthRepository, CheckUserEmailDto, IsEmailAvailableUseCase, IsEmailAvailableUseCaseResp } from '../..';

export class IsEmailAvailableUseCaseImpl implements IsEmailAvailableUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(checkUserEmailDto: CheckUserEmailDto): IsEmailAvailableUseCaseResp {
    const isAvailable = await this.authRepository.isEmailAvailable(checkUserEmailDto);
    return { isAvailable };
  }
}
