import { GetMovieByIdUseCase, GetMovieByIdUseCaseResp, MovieIdDto, MovieRepository } from '../..';

export class GetMovieByIdUseCaseImpl implements GetMovieByIdUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): GetMovieByIdUseCaseResp {
    const movie = await this.movieRepository.getMovieById(movieIdDto);
    return movie;
  }
}
