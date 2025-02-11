import { CreateMovieDto } from '@modules/movies/dtos/create-movie.dto';
import { Movie } from '@modules/movies/entities/movie.entity';
import { MovieFiltersDto } from '@modules/movies/dtos/movie-filters.dto';
import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { UpdateMovieDto } from '@modules/movies/dtos/update-movie.dto';

export abstract class MoviesRepository {
  abstract findAll(movieFiltersDto: MovieFiltersDto): Promise<{ total: number; movies: Movie[] }>;
  abstract findAllByGenreId(genreId: string, paginationDto: PaginationDto): Promise<{ total: number; movies: Movie[] }>;
  abstract findById(id: string): Promise<Movie | null>;
  abstract findByTitle(title: string): Promise<Movie | null>;
  abstract create(createMovieDto: CreateMovieDto): Promise<Movie>;
  abstract update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
  abstract delete(id: string): Promise<boolean>;
}
