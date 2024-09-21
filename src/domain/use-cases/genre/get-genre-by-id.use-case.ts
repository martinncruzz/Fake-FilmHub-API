import { GenreEntity, GenreIdDto, GenreRepository } from "../..";

interface GetGenreByIdUseCase {
  execute(genreIdDto: GenreIdDto): Promise<GenreEntity>;
}

export class GetGenreByIdUseCaseImpl implements GetGenreByIdUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    const genre = await this.genreRepository.getGenreById(genreIdDto);
    return genre;
  }
}
