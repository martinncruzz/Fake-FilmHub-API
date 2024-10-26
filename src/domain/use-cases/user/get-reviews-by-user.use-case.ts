import { PaginationDto, UserIdDto } from '../../../application';
import { PaginationResult, PartialReviewEntity, UserEntity } from '../..';

export type GetReviewsByUserUseCaseResp = Promise<
  Omit<UserEntity, 'reviews'> & { reviews: PaginationResult & { totalReviews: number; data: PartialReviewEntity[] } }
>;

export interface GetReviewsByUserUseCase {
  execute(userIdDto: UserIdDto, paginationDto: PaginationDto): GetReviewsByUserUseCaseResp;
}
