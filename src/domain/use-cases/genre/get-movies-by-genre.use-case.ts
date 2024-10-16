import {
  BaseUrlBuilder,
  BuildBaseUrl,
  BuildPagination,
  GenreIdDto,
  GenreRepository,
  GetMoviesByGenreUseCase,
  GetMoviesByGenreUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
} from '../..';

export class GetMoviesByGenreUseCaseImpl implements GetMoviesByGenreUseCase {
  constructor(
    private readonly genreRepository: GenreRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(genreIdDto: GenreIdDto, paginationDto: PaginationDto): GetMoviesByGenreUseCaseResp {
    const { totalMovies, genre } = await this.genreRepository.getMoviesByGenre(genreIdDto, paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.GENRES, `/${genreIdDto.genre_id}/movies`);
    const { prev, next } = this.buildPagination(paginationDto, totalMovies, baseUrl, '');

    return {
      ...genre,
      movies: {
        totalMovies,
        prev,
        next,
        data: genre.movies || [],
      },
    };
  }
}
