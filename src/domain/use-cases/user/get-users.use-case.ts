import {
  GetUsersUseCase,
  GetUsersUseCaseResp,
  PaginationDto,
  UserRepository,
} from "../..";

export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(paginationDto: PaginationDto): GetUsersUseCaseResp {
    const users = await this.userRepository.getUsers(paginationDto);
    return users;
  }
}
