import {
  BuildPagination,
  GetUsersUseCase,
  GetUsersUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
  UserRepository,
} from '../..';

export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetUsersUseCaseResp {
    const { total, users } = await this.userRepository.getUsers(paginationDto);

    const { prev, next } = this.buildPagination(paginationDto, total, ResourceType.USERS, '');

    return {
      prev,
      next,
      users,
    };
  }
}
