import { DeleteMovieUseCase, DeleteMovieUseCaseResp, MovieRepository } from '../../../domain';
import { MovieIdDto } from '../..';

export class DeleteMovieUseCaseImpl implements DeleteMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): DeleteMovieUseCaseResp {
    const movieDeleted = await this.movieRepository.deleteMovie(movieIdDto);
    return movieDeleted;
  }
}
