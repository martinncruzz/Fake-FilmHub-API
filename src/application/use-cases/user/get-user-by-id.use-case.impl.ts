import { GetUserByIdUseCase, GetUserByIdUseCaseResp, UserRepository } from '../../../domain';
import { UserIdDto } from '../..';

export class GetUserByIdUseCaseImpl implements GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIdDto: UserIdDto): GetUserByIdUseCaseResp {
    const user = await this.userRepository.getUserById(userIdDto);
    return user;
  }
}
