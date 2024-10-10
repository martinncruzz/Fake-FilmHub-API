import {
  BuildPagination,
  GetReviewsUseCase,
  GetReviewsUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
  ReviewRepository,
} from '../..';

export class GetReviewsUseCaseImpl implements GetReviewsUseCase {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetReviewsUseCaseResp {
    const { total, reviews } = await this.reviewRepository.getReviews(paginationDto);

    const { prev, next } = this.buildPagination(paginationDto, total, ResourceType.REVIEWS, '');

    return {
      prev,
      next,
      reviews,
    };
  }
}
