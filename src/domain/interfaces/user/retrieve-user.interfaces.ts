import { PaginationDto, UserEntity, UserIdDto } from "../..";

export interface UsersData {
  total: number;
  users: UserEntity[];
}

export type GetUsersUseCaseResp = Promise<UserEntity[]>;

export type GetUserByIdUseCaseResp = Promise<UserEntity>;

export interface GetUsersUseCase {
  execute(paginationDto: PaginationDto): GetUsersUseCaseResp;
}

export interface GetUserByIdUseCase {
  execute(userIdDto: UserIdDto): GetUserByIdUseCaseResp;
}
