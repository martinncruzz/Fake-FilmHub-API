import { MovieEntity, MovieRepository, UpdateMovieDto } from "../..";

interface UpdateMovieUseCase {
  execute(updateMovieDto: UpdateMovieDto): Promise<MovieEntity>;
}

export class UpdateMovieUseCaseImpl implements UpdateMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    const movie = await this.movieRepository.updateMovie(updateMovieDto);
    return movie;
  }
}
