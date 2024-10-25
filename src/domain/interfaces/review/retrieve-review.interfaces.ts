import { PaginationDto, ReviewIdDto } from '../../../application';
import { ReviewEntity, PaginationResult } from '../..';

export interface ReviewsData {
  total: number;
  reviews: ReviewEntity[];
}

export type GetReviewsUseCaseResp = Promise<PaginationResult & { reviews: ReviewEntity[] }>;
export type GetReviewByIdUseCaseResp = Promise<ReviewEntity>;

export interface GetReviewsUseCase {
  execute(paginationDto: PaginationDto): GetReviewsUseCaseResp;
}

export interface GetReviewByIdUseCase {
  execute(reviewIdDto: ReviewIdDto): GetReviewByIdUseCaseResp;
}
