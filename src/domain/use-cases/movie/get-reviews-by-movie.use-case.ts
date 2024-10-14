import { GetReviewsByMovieUseCase, GetReviewsByMovieUseCaseResp, MovieIdDto, MovieRepository } from '../..';

export class GetReviewsByMovieUseCaseImpl implements GetReviewsByMovieUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movieIdDto: MovieIdDto): GetReviewsByMovieUseCaseResp {
    const movie = await this.movieRepository.getReviewsByMovie(movieIdDto);
    return movie;
  }
}
