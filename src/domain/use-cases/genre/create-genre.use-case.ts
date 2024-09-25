import {
  CreateGenreDto,
  CreateGenreUseCase,
  CreateGenreUseCaseResp,
  GenreRepository,
} from "../..";

export class CreateGenreUseCaseImpl implements CreateGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(createGenreDto: CreateGenreDto): CreateGenreUseCaseResp {
    const genre = await this.genreRepository.createGenre(createGenreDto);
    return genre;
  }
}
