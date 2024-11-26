import { CreateGenreDto, GenreIdDto, PaginationDto, UpdateGenreDto } from '../../application';
import { GenreEntity, GenresData, GenresWithMovies } from '..';

export abstract class GenreRepository {
  abstract getGenres(paginationDto: PaginationDto): Promise<GenresData>;
  abstract getGenreById(genreIdDto: GenreIdDto): Promise<GenreEntity>;
  abstract getMoviesByGenre(genreIdDto: GenreIdDto, paginationDto: PaginationDto): Promise<GenresWithMovies>;
  abstract createGenre(createGenreDto: CreateGenreDto): Promise<GenreEntity>;
  abstract updateGenre(updateGenreDto: UpdateGenreDto): Promise<GenreEntity>;
  abstract deleteGenre(genreIdDto: GenreIdDto): Promise<boolean>;
}
