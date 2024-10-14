import {
  BuildPagination,
  GetUsersUseCase,
  GetUsersUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
  UserRepository,
} from '../..';
import { envs } from '../../../config';

export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetUsersUseCaseResp {
    const { total, users } = await this.userRepository.getUsers(paginationDto);

    const baseUrl = `${envs.WEBSERVICE_URL}/${ResourceType.USERS}`;
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      users,
    };
  }
}
