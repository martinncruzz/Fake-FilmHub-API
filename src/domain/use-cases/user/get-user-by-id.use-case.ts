import { UserEntity, UserIdDto, UserRepository } from "../..";

interface GetUserByIdUseCase {
  execute(userIdDto: UserIdDto): Promise<UserEntity>;
}

export class GetUserByIdUseCaseImpl implements GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIdDto: UserIdDto): Promise<UserEntity> {
    const user = await this.userRepository.getUserById(userIdDto);
    return user;
  }
}
