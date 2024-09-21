import { GenreEntity, GenreIdDto, GenreRepository } from "../..";

interface GetMoviesByGenreUseCase {
  execute(genreIdDto: GenreIdDto): Promise<GenreEntity>;
}

export class GetMoviesByGenreUseCaseImpl implements GetMoviesByGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    const genre = await this.genreRepository.getMoviesByGenre(genreIdDto);
    return genre;
  }
}
