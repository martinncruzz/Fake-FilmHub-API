import { CreateReviewDto, CreateReviewUseCase, CreateReviewUseCaseResp, ReviewRepository, UserEntity } from '../..';

export class CreateReviewUseCaseImpl implements CreateReviewUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(createReviewDto: CreateReviewDto, user: UserEntity): CreateReviewUseCaseResp {
    const review = await this.reviewRepository.createReview(createReviewDto, user);
    return review;
  }
}
