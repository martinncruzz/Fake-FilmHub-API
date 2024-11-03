import { MovieEntity, MoviesData, MovieRepository, MovieWithReviews, MovieDatasource } from '../../domain';
import { CreateMovieDto, MovieFiltersDto, MovieIdDto, PaginationDto, UpdateMovieDto } from '../../application';
import { MovieDatasourceImpl } from '..';

export class MovieRepositoryImpl implements MovieRepository {
  private static _instance: MovieRepositoryImpl;

  private constructor(private readonly movieDatasource: MovieDatasource) {}

  static get instance(): MovieRepositoryImpl {
    if (!this._instance) {
      const movieDatasource = MovieDatasourceImpl.instance;
      this._instance = new MovieRepositoryImpl(movieDatasource);
    }

    return this._instance;
  }

  getMovies(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): Promise<MoviesData> {
    return this.movieDatasource.getMovies(paginationDto, movieFiltersDto);
  }

  getMovieById(movieIdDto: MovieIdDto): Promise<MovieEntity> {
    return this.movieDatasource.getMovieById(movieIdDto);
  }

  getReviewsByMovie(movieIdDto: MovieIdDto, paginationDto: PaginationDto): Promise<MovieWithReviews> {
    return this.movieDatasource.getReviewsByMovie(movieIdDto, paginationDto);
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
