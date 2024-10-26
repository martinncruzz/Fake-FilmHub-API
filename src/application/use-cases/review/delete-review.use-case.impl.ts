import { DeleteReviewUseCase, DeleteReviewUseCaseResp, ReviewRepository, UserEntity } from '../../../domain';
import { ReviewIdDto } from '../..';

export class DeleteReviewUseCaseImpl implements DeleteReviewUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(reviewIdDto: ReviewIdDto, user: UserEntity): DeleteReviewUseCaseResp {
    const reviewDeleted = await this.reviewRepository.deleteReview(reviewIdDto, user);
    return reviewDeleted;
  }
}
