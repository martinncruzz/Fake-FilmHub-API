import { MovieEntity, UpdateMovieDto } from '../..';

export type UpdateMovieUseCaseResp = Promise<MovieEntity>;

export interface UpdateMovieUseCase {
  execute(updateMovieDto: UpdateMovieDto): UpdateMovieUseCaseResp;
}
