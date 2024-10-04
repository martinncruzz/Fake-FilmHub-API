import { PaginationDto, PaginationResult, UserEntity, UserIdDto } from '../..';

export interface UsersData {
  total: number;
  users: UserEntity[];
}

export type GetUserByIdUseCaseResp = Promise<UserEntity>;

export type GetUsersUseCaseResp = Promise<
  PaginationResult & {
    users: UserEntity[];
  }
>;

export interface GetUserByIdUseCase {
  execute(userIdDto: UserIdDto): GetUserByIdUseCaseResp;
}

export interface GetUsersUseCase {
  execute(paginationDto: PaginationDto): GetUsersUseCaseResp;
}
