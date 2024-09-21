import { GenreIdDto, GenreRepository } from "../..";

interface DeleteGenreUseCase {
  execute(genreIdDto: GenreIdDto): Promise<boolean>;
}

export class DeleteGenreUseCaseImpl implements DeleteGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): Promise<boolean> {
    const genreDeleted = await this.genreRepository.deleteGenre(genreIdDto);
    return genreDeleted;
  }
}
