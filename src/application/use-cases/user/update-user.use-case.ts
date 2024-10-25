import { UpdateUserUseCase, UpdateUserUseCaseResp, UserRepository } from '../../../domain';
import { UpdateUserDto } from '../..';

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(updateUserDto: UpdateUserDto): UpdateUserUseCaseResp {
    const user = await this.userRepository.updateUser(updateUserDto);
    return user;
  }
}
