import {
  BuildBaseUrl,
  BuildPagination,
  GetUsersUseCase,
  GetUsersUseCaseResp,
  ResourceType,
  UserRepository,
} from '../../../domain';
import { BaseUrlBuilder, PaginationBuilder, PaginationDto } from '../..';

export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetUsersUseCaseResp {
    const { total, users } = await this.userRepository.getUsers(paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.USERS);
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      users,
    };
  }
}
