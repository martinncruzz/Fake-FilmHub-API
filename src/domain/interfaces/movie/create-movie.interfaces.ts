import { CreateMovieDto } from '../../../application';
import { MovieEntity } from '../..';

export type CreateMovieUseCaseResp = Promise<MovieEntity>;

export interface CreateMovieUseCase {
  execute(createMovieDto: CreateMovieDto): CreateMovieUseCaseResp;
}
