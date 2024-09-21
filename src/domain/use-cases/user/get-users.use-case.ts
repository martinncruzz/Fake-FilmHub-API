import { PaginationDto, UserEntity, UserRepository } from "../..";

interface GetUsersUseCase {
  execute(paginationDto: PaginationDto): Promise<UserEntity[]>;
}

export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(paginationDto: PaginationDto): Promise<UserEntity[]> {
    const users = await this.userRepository.getUsers(paginationDto);
    return users;
  }
}
