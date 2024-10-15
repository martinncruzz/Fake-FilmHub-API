import { MovieEntity, MovieFiltersDto, MovieIdDto, PaginationDto, PaginationResult, PartialReviewEntity } from '../..';

export interface MoviesData {
  total: number;
  movies: MovieEntity[];
}

export interface MovieWithReviews {
  totalReviews: number;
  movie: MovieEntity;
}

export type GetMovieByIdUseCaseResp = Promise<MovieEntity>;

export type GetMoviesUseCaseResp = Promise<PaginationResult & { movies: MovieEntity[] }>;

export type GetReviewsByMovieUseCaseResp = Promise<
  Omit<MovieEntity, 'reviews'> & { reviews: PaginationResult & { totalReviews: number; data: PartialReviewEntity[] } }
>;

export interface GetMovieByIdUseCase {
  execute(movieIdDto: MovieIdDto): GetMovieByIdUseCaseResp;
}

export interface GetMoviesUseCase {
  execute(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): GetMoviesUseCaseResp;
}

export interface GetReviewsByMovieUseCase {
  execute(movieIdDto: MovieIdDto, paginationDto: PaginationDto): GetReviewsByMovieUseCaseResp;
}
