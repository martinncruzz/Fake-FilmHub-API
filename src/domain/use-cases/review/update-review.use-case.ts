import { ReviewRepository, UpdateReviewDto, UpdateReviewUseCase, UpdateReviewUseCaseResp, UserEntity } from '../..';

export class UpdateReviewUseCaseImpl implements UpdateReviewUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(updateReviewDto: UpdateReviewDto, user: UserEntity): UpdateReviewUseCaseResp {
    const review = await this.reviewRepository.updateReview(updateReviewDto, user);
    return review;
  }
}
