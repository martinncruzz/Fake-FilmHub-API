import { ReviewRepository, UpdateReviewUseCase, UpdateReviewUseCaseResp, UserEntity } from '../../../domain';
import { UpdateReviewDto } from '../..';

export class UpdateReviewUseCaseImpl implements UpdateReviewUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(updateReviewDto: UpdateReviewDto, user: UserEntity): UpdateReviewUseCaseResp {
    const review = await this.reviewRepository.updateReview(updateReviewDto, user);
    return review;
  }
}
