import { GetReviewByIdUseCase, GetReviewByIdUseCaseResp, ReviewRepository } from '../../../domain';
import { ReviewIdDto } from '../..';

export class GetReviewByIdUseCaseImpl implements GetReviewByIdUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(reviewIdDto: ReviewIdDto): GetReviewByIdUseCaseResp {
    const review = await this.reviewRepository.getReviewById(reviewIdDto);
    return review;
  }
}
