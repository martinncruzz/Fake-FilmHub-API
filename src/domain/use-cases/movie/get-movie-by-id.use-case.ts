import { MovieIdDto } from '../../../application';
import { MovieEntity } from '../..';

export type GetMovieByIdUseCaseResp = Promise<MovieEntity>;

export interface GetMovieByIdUseCase {
  execute(movieIdDto: MovieIdDto): GetMovieByIdUseCaseResp;
}
