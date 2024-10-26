import { GenreRepository, UpdateGenreUseCase, UpdateGenreUseCaseResp } from '../../../domain';
import { UpdateGenreDto } from '../..';

export class UpdateGenreUseCaseImpl implements UpdateGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(updateGenreDto: UpdateGenreDto): UpdateGenreUseCaseResp {
    const genre = await this.genreRepository.updateGenre(updateGenreDto);
    return genre;
  }
}
