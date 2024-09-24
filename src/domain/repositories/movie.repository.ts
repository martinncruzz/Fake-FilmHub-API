import {
  CreateMovieDto,
  MovieEntity,
  MovieFiltersDto,
  MovieIdDto,
  PaginationDto,
  UpdateMovieDto,
} from "..";

export abstract class MovieRepository {
  abstract getMovies(
    paginationDto: PaginationDto,
    movieFiltersDto: MovieFiltersDto
  ): Promise<[number, MovieEntity[]]>;
  abstract getMovieById(movieIdDto: MovieIdDto): Promise<MovieEntity>;
  abstract createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity>;
  abstract updateMovie(updateMovieDto: UpdateMovieDto): Promise<MovieEntity>;
  abstract deleteMovie(movieIdDto: MovieIdDto): Promise<boolean>;
}
