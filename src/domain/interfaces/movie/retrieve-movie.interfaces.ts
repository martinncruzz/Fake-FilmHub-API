import { MovieEntity, MovieFiltersDto, MovieIdDto, PaginationDto, PaginationResult } from '../..';

export interface MoviesData {
  total: number;
  movies: MovieEntity[];
}

export type GetMovieByIdUseCaseResp = Promise<MovieEntity>;

export type GetMoviesUseCaseResp = Promise<
  PaginationResult & {
    movies: MovieEntity[];
  }
>;

export interface GetMovieByIdUseCase {
  execute(movieIdDto: MovieIdDto): GetMovieByIdUseCaseResp;
}

export interface GetMoviesUseCase {
  execute(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): GetMoviesUseCaseResp;
}
