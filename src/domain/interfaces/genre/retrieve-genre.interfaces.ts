import { GenreEntity, GenreIdDto, PaginationDto, PaginationResult, PartialMovieEntity } from '../..';

export interface GenresData {
  total: number;
  genres: GenreEntity[];
}

export interface GenresWithMovies {
  totalMovies: number;
  genre: GenreEntity;
}

export type GetGenreByIdUseCaseResp = Promise<GenreEntity>;

export type GetGenresUseCaseResp = Promise<
  PaginationResult & {
    genres: GenreEntity[];
  }
>;

export type GetMoviesByGenreUseCaseResp = Promise<
  Omit<GenreEntity, 'movies'> & { movies: PaginationResult & { totalMovies: number; data: PartialMovieEntity[] } }
>;

export interface GetGenreByIdUseCase {
  execute(genreIdDto: GenreIdDto): GetGenreByIdUseCaseResp;
}

export interface GetGenresUseCase {
  execute(paginationDto: PaginationDto): GetGenresUseCaseResp;
}

export interface GetMoviesByGenreUseCase {
  execute(genreIdDto: GenreIdDto, paginationDto: PaginationDto): GetMoviesByGenreUseCaseResp;
}
