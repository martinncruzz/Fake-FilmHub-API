import { ReviewEntity, UpdateReviewDto, UserEntity } from '../..';

export type UpdateReviewUseCaseResp = Promise<ReviewEntity>;

export interface UpdateReviewUseCase {
  execute(updateReviewDto: UpdateReviewDto, user: UserEntity): UpdateReviewUseCaseResp;
}
