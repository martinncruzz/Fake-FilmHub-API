import {
  BuildBaseUrl,
  BuildFiltersQuery,
  BuildPagination,
  GetMoviesUseCase,
  GetMoviesUseCaseResp,
  MovieRepository,
  ResourceType,
} from '../../../domain';
import { BaseUrlBuilder, FiltersQueryBuilder, MovieFiltersDto, PaginationBuilder, PaginationDto } from '../..';

export class GetMoviesUseCaseImpl implements GetMoviesUseCase {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly buildFiltersQuery: BuildFiltersQuery<MovieFiltersDto> = FiltersQueryBuilder.build,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): GetMoviesUseCaseResp {
    const { total, movies } = await this.movieRepository.getMovies(paginationDto, movieFiltersDto);

    const filtersQuery = this.buildFiltersQuery(movieFiltersDto);
    const baseUrl = this.buildBaseUrl(ResourceType.MOVIES);
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, filtersQuery);

    return {
      prev,
      next,
      movies,
    };
  }
}
