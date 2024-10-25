import { GenreDatasource, GenreEntity, GenreRepository, GenresData, GenresWithMovies } from '../../domain';
import { CreateGenreDto, GenreIdDto, PaginationDto, UpdateGenreDto } from '../../application';

export class GenreRepositoryImpl implements GenreRepository {
  constructor(private readonly genreDatasource: GenreDatasource) {}

  getGenres(paginationDto: PaginationDto): Promise<GenresData> {
    return this.genreDatasource.getGenres(paginationDto);
  }

  getGenreById(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    return this.genreDatasource.getGenreById(genreIdDto);
  }

  getMoviesByGenre(genreIdDto: GenreIdDto, paginationDto: PaginationDto): Promise<GenresWithMovies> {
    return this.genreDatasource.getMoviesByGenre(genreIdDto, paginationDto);
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
