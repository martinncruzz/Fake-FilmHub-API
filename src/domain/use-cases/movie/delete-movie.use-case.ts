import {
  DeleteMovieUseCase,
  DeleteMovieUseCaseResp,
  MovieIdDto,
  MovieRepository,
} from "../..";

export class DeleteMovieUseCaseImpl implements DeleteMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): DeleteMovieUseCaseResp {
    const movieDeleted = await this.movieRepository.deleteMovie(movieIdDto);
    return movieDeleted;
  }
}
