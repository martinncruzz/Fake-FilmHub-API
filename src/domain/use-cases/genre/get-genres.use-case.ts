import { GenreEntity, GenreRepository, PaginationDto } from "../..";

interface GetGenresUseCase {
  execute(paginationDto: PaginationDto): Promise<GenreEntity[]>;
}

export class GetGenresUseCaseImpl implements GetGenresUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(paginationDto: PaginationDto): Promise<GenreEntity[]> {
    const genres = await this.genreRepository.getGenres(paginationDto);
    return genres;
  }
}
