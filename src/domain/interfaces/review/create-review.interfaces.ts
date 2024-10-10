import { CreateReviewDto, ReviewEntity, UserEntity } from '../..';

export type CreateReviewUseCaseResp = Promise<ReviewEntity>;

export interface CreateReviewUseCase {
  execute(createReviewDto: CreateReviewDto, user: UserEntity): CreateReviewUseCaseResp;
}
