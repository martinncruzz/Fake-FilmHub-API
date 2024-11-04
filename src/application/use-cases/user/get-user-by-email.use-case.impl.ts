import { GetUserByEmailUseCase, GetUserByEmailUseCaseResp, UserRepository } from '../../../domain';
import { CheckUserEmailDto } from '../..';

export class GetUserByEmailUseCaseImpl implements GetUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(checkUserEmailDto: CheckUserEmailDto): GetUserByEmailUseCaseResp {
    const user = await this.userRepository.getUserByEmail(checkUserEmailDto);
    return { isAvailable: !user };
  }
}
