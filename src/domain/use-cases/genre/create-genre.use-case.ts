import { CreateGenreDto, GenreEntity, GenreRepository } from "../..";

interface CreateGenreUseCase {
  execute(createGenreDto: CreateGenreDto): Promise<GenreEntity>;
}

export class CreateGenreUseCaseImpl implements CreateGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    const genre = await this.genreRepository.createGenre(createGenreDto);
    return genre;
  }
}
