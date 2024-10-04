import { GenreIdDto, GenreRepository, GetMoviesByGenreUseCase, GetMoviesByGenreUseCaseResp } from '../..';

export class GetMoviesByGenreUseCaseImpl implements GetMoviesByGenreUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): GetMoviesByGenreUseCaseResp {
    const genre = await this.genreRepository.getMoviesByGenre(genreIdDto);
    return genre;
  }
}
