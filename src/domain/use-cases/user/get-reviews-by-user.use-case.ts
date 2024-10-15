import {
  BaseUrlBuilder,
  BuildBaseUrl,
  BuildPagination,
  GetReviewsByUserUseCase,
  GetReviewsByUserUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
  UserIdDto,
  UserRepository,
} from '../..';

export class GetReviewsByUserUseCaseImpl implements GetReviewsByUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(userIdDto: UserIdDto, paginationDto: PaginationDto): GetReviewsByUserUseCaseResp {
    const { totalReviews, user } = await this.userRepository.getReviewsByUser(userIdDto, paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.USERS, `/${userIdDto.user_id}/reviews`);
    const { prev, next } = this.buildPagination(paginationDto, totalReviews, baseUrl, '');

    return {
      ...user,
      reviews: {
        totalReviews,
        prev,
        next,
        data: user.reviews || [],
      },
    };
  }
}
