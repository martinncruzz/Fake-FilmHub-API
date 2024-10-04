import { MovieIdDto } from '../..';

export type DeleteMovieUseCaseResp = Promise<boolean>;

export interface DeleteMovieUseCase {
  execute(movieIdDto: MovieIdDto): DeleteMovieUseCaseResp;
}
