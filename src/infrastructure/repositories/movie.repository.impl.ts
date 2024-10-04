import {
  CreateMovieDto,
  MovieDatasource,
  MovieEntity,
  MovieFiltersDto,
  MovieIdDto,
  MovieRepository,
  MoviesData,
  PaginationDto,
  UpdateMovieDto,
} from '../../domain';

export class MovieRepositoryImpl implements MovieRepository {
  constructor(private readonly movieDatasource: MovieDatasource) {}

  getMovies(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): Promise<MoviesData> {
    return this.movieDatasource.getMovies(paginationDto, movieFiltersDto);
  }
  getMovieById(movieIdDto: MovieIdDto): Promise<MovieEntity> {
    return this.movieDatasource.getMovieById(movieIdDto);
  }
  createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    return this.movieDatasource.createMovie(createMovieDto);
  }
  updateMovie(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    return this.movieDatasource.updateMovie(updateMovieDto);
  }
  deleteMovie(movieIdDto: MovieIdDto): Promise<boolean> {
    return this.movieDatasource.deleteMovie(movieIdDto);
  }
}
