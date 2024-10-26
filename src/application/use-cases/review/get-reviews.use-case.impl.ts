import {
  BuildBaseUrl,
  BuildPagination,
  GetReviewsUseCase,
  GetReviewsUseCaseResp,
  ResourceType,
  ReviewRepository,
} from '../../../domain';
import { BaseUrlBuilder, PaginationBuilder, PaginationDto } from '../..';

export class GetReviewsUseCaseImpl implements GetReviewsUseCase {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetReviewsUseCaseResp {
    const { total, reviews } = await this.reviewRepository.getReviews(paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.REVIEWS);
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      reviews,
    };
  }
}
