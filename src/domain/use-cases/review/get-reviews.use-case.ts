import {
  BuildPagination,
  GetReviewsUseCase,
  GetReviewsUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
  ReviewRepository,
} from '../..';
import { envs } from '../../../config';

export class GetReviewsUseCaseImpl implements GetReviewsUseCase {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetReviewsUseCaseResp {
    const { total, reviews } = await this.reviewRepository.getReviews(paginationDto);

    const baseUrl = `${envs.WEBSERVICE_URL}/${ResourceType.REVIEWS}`;
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      reviews,
    };
  }
}
