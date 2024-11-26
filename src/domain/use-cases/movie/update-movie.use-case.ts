import { UpdateMovieDto } from '../../../application';
import { MovieEntity } from '../..';

export type UpdateMovieUseCaseResp = Promise<MovieEntity>;

export interface UpdateMovieUseCase {
  execute(updateMovieDto: UpdateMovieDto): UpdateMovieUseCaseResp;
}
