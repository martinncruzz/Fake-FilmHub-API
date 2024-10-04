import { CreateMovieDto, CreateMovieUseCase, CreateMovieUseCaseResp, MovieRepository } from '../..';

export class CreateMovieUseCaseImpl implements CreateMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(createMovieDto: CreateMovieDto): CreateMovieUseCaseResp {
    const movie = await this.movieRepository.createMovie(createMovieDto);
    return movie;
  }
}
