import {
  GenreRepository,
  GetGenresUseCase,
  GetGenresUseCaseResp,
  PaginationDto,
} from "../..";

export class GetGenresUseCaseImpl implements GetGenresUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(paginationDto: PaginationDto): GetGenresUseCaseResp {
    const genres = await this.genreRepository.getGenres(paginationDto);
    return genres;
  }
}
