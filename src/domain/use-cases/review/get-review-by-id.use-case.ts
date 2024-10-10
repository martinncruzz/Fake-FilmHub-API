import { GetReviewByIdUseCase, GetReviewByIdUseCaseResp, ReviewIdDto, ReviewRepository } from '../..';

export class GetReviewByIdUseCaseImpl implements GetReviewByIdUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(reviewIdDto: ReviewIdDto): GetReviewByIdUseCaseResp {
    const review = await this.reviewRepository.getReviewById(reviewIdDto);
    return review;
  }
}
