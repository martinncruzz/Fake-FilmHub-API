import {
  MovieEntity,
  MovieFiltersDto,
  MovieRepository,
  PaginationBuilder,
  PaginationDto,
  FiltersQueryBuilder,
  ResourceType,
} from "../..";

interface GetMoviesUseCaseResponse {
  prev: string | null;
  next: string | null;
  movies: MovieEntity[];
}

type BuildFiltersQuery<T> = (filters?: T) => string;
type BuildPagination = (
  paginationDto: PaginationDto,
  total: number,
  resourceType: ResourceType,
  filtersQuery?: string
) => { next: string | null; prev: string | null };

interface GetMoviesUseCase {
  execute(
    paginationDto: PaginationDto,
    movieFiltersDto: MovieFiltersDto
  ): Promise<GetMoviesUseCaseResponse>;
}

export class GetMoviesUseCaseImpl implements GetMoviesUseCase {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly buildFiltersQuery: BuildFiltersQuery<MovieFiltersDto> = FiltersQueryBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build
  ) {}

  async execute(
    paginationDto: PaginationDto,
    movieFiltersDto: MovieFiltersDto
  ): Promise<GetMoviesUseCaseResponse> {
    const [total, movies] = await this.movieRepository.getMovies(
      paginationDto,
      movieFiltersDto
    );

    const filtersQuery = this.buildFiltersQuery(movieFiltersDto);
    const { prev, next } = this.buildPagination(
      paginationDto,
      total,
      ResourceType.MOVIES,
      filtersQuery
    );

    return {
      prev,
      next,
      movies,
    };
  }
}
