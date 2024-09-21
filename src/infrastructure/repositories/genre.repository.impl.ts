import {
  CreateGenreDto,
  GenreDatasource,
  GenreEntity,
  GenreIdDto,
  GenreRepository,
  PaginationDto,
  UpdateGenreDto,
} from "../../domain";

export class GenreRepositoryImpl implements GenreRepository {
  constructor(private readonly genreDatasource: GenreDatasource) {}

  getGenres(paginationDto: PaginationDto): Promise<GenreEntity[]> {
    return this.genreDatasource.getGenres(paginationDto);
  }
  getMoviesByGenre(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    return this.genreDatasource.getMoviesByGenre(genreIdDto);
  }
  getGenreById(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    return this.genreDatasource.getGenreById(genreIdDto);
  }
  createGenre(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    return this.genreDatasource.createGenre(createGenreDto);
  }
  updateGenre(updateGenreDto: UpdateGenreDto): Promise<GenreEntity> {
    return this.genreDatasource.updateGenre(updateGenreDto);
  }
  deleteGenre(genreIdDto: GenreIdDto): Promise<boolean> {
    return this.genreDatasource.deleteGenre(genreIdDto);
  }
}
