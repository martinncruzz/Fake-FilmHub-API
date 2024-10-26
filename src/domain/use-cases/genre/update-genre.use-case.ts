import { UpdateGenreDto } from '../../../application';
import { GenreEntity } from '../..';

export type UpdateGenreUseCaseResp = Promise<GenreEntity>;

export interface UpdateGenreUseCase {
  execute(updateGenreDto: UpdateGenreDto): UpdateGenreUseCaseResp;
}
