import { GenreEntity, GenreRepository, UpdateGenreDto } from "../..";

interface UpdateGenreUseCase {
  execute(updateGenreDto: UpdateGenreDto): Promise<GenreEntity>;
}

export class UpdateGenreUseCaseImpl implements UpdateGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(updateGenreDto: UpdateGenreDto): Promise<GenreEntity> {
    const genre = await this.genreRepository.updateGenre(updateGenreDto);
    return genre;
  }
}
