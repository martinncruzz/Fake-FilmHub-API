import { CreateMovieDto, MovieEntity, MovieRepository } from "../..";

interface CreateMovieUseCase {
  execute(createMovieDto: CreateMovieDto): Promise<MovieEntity>;
}

export class CreateMovieUseCaseImpl implements CreateMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const movie = await this.movieRepository.createMovie(createMovieDto);
    return movie;
  }
}
