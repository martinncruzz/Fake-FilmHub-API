import { ReviewIdDto } from '../../../application';
import { ReviewEntity } from '../..';

export type GetReviewByIdUseCaseResp = Promise<ReviewEntity>;

export interface GetReviewByIdUseCase {
  execute(reviewIdDto: ReviewIdDto): GetReviewByIdUseCaseResp;
}
