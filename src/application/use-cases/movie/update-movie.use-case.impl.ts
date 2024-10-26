import { MovieRepository, UpdateMovieUseCase, UpdateMovieUseCaseResp } from '../../../domain';
import { UpdateMovieDto } from '../..';

export class UpdateMovieUseCaseImpl implements UpdateMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(updateMovieDto: UpdateMovieDto): UpdateMovieUseCaseResp {
    const movie = await this.movieRepository.updateMovie(updateMovieDto);
    return movie;
  }
}
