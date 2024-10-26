import { DeleteGenreUseCase, DeleteGenreUseCaseResp, GenreRepository } from '../../../domain';
import { GenreIdDto } from '../..';

export class DeleteGenreUseCaseImpl implements DeleteGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): DeleteGenreUseCaseResp {
    const genreDeleted = await this.genreRepository.deleteGenre(genreIdDto);
    return genreDeleted;
  }
}
