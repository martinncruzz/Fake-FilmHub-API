import { CreateGenreUseCase, CreateGenreUseCaseResp, GenreRepository } from '../../../domain';
import { CreateGenreDto } from '../..';

export class CreateGenreUseCaseImpl implements CreateGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(createGenreDto: CreateGenreDto): CreateGenreUseCaseResp {
    const genre = await this.genreRepository.createGenre(createGenreDto);
    return genre;
  }
}
