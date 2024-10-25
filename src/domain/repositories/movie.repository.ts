import { CreateMovieDto, MovieFiltersDto, MovieIdDto, PaginationDto, UpdateMovieDto } from '../../application';
import { MovieEntity, MoviesData, MovieWithReviews } from '..';

export abstract class MovieRepository {
  abstract getMovies(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): Promise<MoviesData>;
  abstract getMovieById(movieIdDto: MovieIdDto): Promise<MovieEntity>;
  abstract getReviewsByMovie(movieIdDto: MovieIdDto, paginationDto: PaginationDto): Promise<MovieWithReviews>;
  abstract createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity>;
  abstract updateMovie(updateMovieDto: UpdateMovieDto): Promise<MovieEntity>;
  abstract deleteMovie(movieIdDto: MovieIdDto): Promise<boolean>;
}
