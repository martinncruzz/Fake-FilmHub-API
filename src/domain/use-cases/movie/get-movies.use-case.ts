import {
  MovieFiltersDto,
  MovieRepository,
  PaginationBuilder,
  PaginationDto,
  FiltersQueryBuilder,
  ResourceType,
  BuildFiltersQuery,
  BuildPagination,
  GetMoviesUseCase,
  GetMoviesUseCaseResp,
} from '../..';

export class GetMoviesUseCaseImpl implements GetMoviesUseCase {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly buildFiltersQuery: BuildFiltersQuery<MovieFiltersDto> = FiltersQueryBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): GetMoviesUseCaseResp {
    const { total, movies } = await this.movieRepository.getMovies(paginationDto, movieFiltersDto);

    const filtersQuery = this.buildFiltersQuery(movieFiltersDto);
    const { prev, next } = this.buildPagination(paginationDto, total, ResourceType.MOVIES, filtersQuery);

    return {
      prev,
      next,
      movies,
    };
  }
}
