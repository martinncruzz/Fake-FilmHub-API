import {
  CreateGenreDto,
  GenreEntity,
  GenreIdDto,
  PaginationDto,
  UpdateGenreDto,
} from "..";

export abstract class GenreDatasource {
  abstract getGenres(paginationDto: PaginationDto): Promise<GenreEntity[]>;
  abstract getMoviesByGenre(genreIdDto: GenreIdDto): Promise<GenreEntity>;
  abstract getGenreById(genreIdDto: GenreIdDto): Promise<GenreEntity>;
  abstract createGenre(createGenreDto: CreateGenreDto): Promise<GenreEntity>;
  abstract updateGenre(updateGenreDto: UpdateGenreDto): Promise<GenreEntity>;
  abstract deleteGenre(genreIdDto: GenreIdDto): Promise<boolean>;
}
