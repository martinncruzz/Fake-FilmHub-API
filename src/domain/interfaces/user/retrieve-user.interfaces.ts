import { PaginationDto, UserIdDto } from '../../../application';
import { PaginationResult, PartialReviewEntity, UserEntity } from '../..';

export interface UsersData {
  total: number;
  users: UserEntity[];
}

export interface UserWithReviews {
  totalReviews: number;
  user: UserEntity;
}

export type GetUsersUseCaseResp = Promise<PaginationResult & { users: UserEntity[] }>;
export type GetUserByIdUseCaseResp = Promise<UserEntity>;
export type GetReviewsByUserUseCaseResp = Promise<
  Omit<UserEntity, 'reviews'> & { reviews: PaginationResult & { totalReviews: number; data: PartialReviewEntity[] } }
>;

export interface GetUsersUseCase {
  execute(paginationDto: PaginationDto): GetUsersUseCaseResp;
}

export interface GetUserByIdUseCase {
  execute(userIdDto: UserIdDto): GetUserByIdUseCaseResp;
}

export interface GetReviewsByUserUseCase {
  execute(userIdDto: UserIdDto, paginationDto: PaginationDto): GetReviewsByUserUseCaseResp;
}
