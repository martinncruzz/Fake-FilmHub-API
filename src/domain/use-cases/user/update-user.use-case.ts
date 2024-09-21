import { UpdateUserDto, UserEntity, UserRepository } from "../..";

interface UpdateUserUseCase {
  execute(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.updateUser(updateUserDto);
    return user;
  }
}
