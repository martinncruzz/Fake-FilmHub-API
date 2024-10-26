import { PaginationDto } from '../../../application';
import { PaginationResult, ReviewEntity } from '../..';

export type GetReviewsUseCaseResp = Promise<PaginationResult & { reviews: ReviewEntity[] }>;

export interface GetReviewsUseCase {
  execute(paginationDto: PaginationDto): GetReviewsUseCaseResp;
}
