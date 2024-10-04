import { DeleteGenreUseCase, DeleteGenreUseCaseResp, GenreIdDto, GenreRepository } from '../..';

export class DeleteGenreUseCaseImpl implements DeleteGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): DeleteGenreUseCaseResp {
    const genreDeleted = await this.genreRepository.deleteGenre(genreIdDto);
    return genreDeleted;
  }
}
