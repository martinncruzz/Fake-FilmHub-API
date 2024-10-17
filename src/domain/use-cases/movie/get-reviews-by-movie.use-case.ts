import {
  BaseUrlBuilder,
  BuildBaseUrl,
  BuildPagination,
  GetReviewsByMovieUseCase,
  GetReviewsByMovieUseCaseResp,
  MovieIdDto,
  MovieRepository,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
} from '../..';

export class GetReviewsByMovieUseCaseImpl implements GetReviewsByMovieUseCase {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(movieIdDto: MovieIdDto, paginationDto: PaginationDto): GetReviewsByMovieUseCaseResp {
    const { totalReviews, movie } = await this.movieRepository.getReviewsByMovie(movieIdDto, paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.MOVIES, `/${movieIdDto.movie_id}/reviews`);
    const { prev, next } = this.buildPagination(paginationDto, totalReviews, baseUrl, '');

    return {
      ...movie,
      reviews: {
        totalReviews,
        prev,
        next,
        data: movie.reviews || [],
      },
    };
  }
}
