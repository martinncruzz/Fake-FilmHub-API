import { PaginationDto } from '../../../application';
import { PaginationResult, UserEntity } from '../..';

export type GetUsersUseCaseResp = Promise<PaginationResult & { users: UserEntity[] }>;

export interface GetUsersUseCase {
  execute(paginationDto: PaginationDto): GetUsersUseCaseResp;
}
