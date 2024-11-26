import { ReviewIdDto } from '../../../application';
import { UserEntity } from '../..';

export type DeleteReviewUseCaseResp = Promise<boolean>;

export interface DeleteReviewUseCase {
  execute(reviewIdDto: ReviewIdDto, user: UserEntity): DeleteReviewUseCaseResp;
}
