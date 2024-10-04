import { GenreIdDto, GenreRepository, GetGenreByIdUseCase, GetGenreByIdUseCaseResp } from '../..';

export class GetGenreByIdUseCaseImpl implements GetGenreByIdUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): GetGenreByIdUseCaseResp {
    const genre = await this.genreRepository.getGenreById(genreIdDto);
    return genre;
  }
}
