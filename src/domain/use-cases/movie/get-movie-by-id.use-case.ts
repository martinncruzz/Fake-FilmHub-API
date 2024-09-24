import { MovieEntity, MovieIdDto, MovieRepository } from "../..";

interface GetMovieByIdUseCase {
  execute(movieIdDto: MovieIdDto): Promise<MovieEntity>;
}

export class GetMovieByIdUseCaseImpl implements GetMovieByIdUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): Promise<MovieEntity> {
    const movie = await this.movieRepository.getMovieById(movieIdDto);
    return movie;
  }
}
