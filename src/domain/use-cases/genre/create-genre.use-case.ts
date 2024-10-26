import { CreateGenreDto } from '../../../application';
import { GenreEntity } from '../..';

export type CreateGenreUseCaseResp = Promise<GenreEntity>;

export interface CreateGenreUseCase {
  execute(createGenreDto: CreateGenreDto): CreateGenreUseCaseResp;
}
