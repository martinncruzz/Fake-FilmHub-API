import { MovieIdDto, MovieRepository } from "../..";

interface DeleteMovieUseCase {
  execute(movieIdDto: MovieIdDto): Promise<boolean>;
}

export class DeleteMovieUseCaseImpl implements DeleteMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): Promise<boolean> {
    const movieDeleted = await this.movieRepository.deleteMovie(movieIdDto);
    return movieDeleted;
  }
}
