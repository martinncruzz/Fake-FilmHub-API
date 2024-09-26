import {
  BuildPagination,
  GenreRepository,
  GetGenresUseCase,
  GetGenresUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
} from "../..";

export class GetGenresUseCaseImpl implements GetGenresUseCase {
  constructor(
    private readonly genreRepository: GenreRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build
  ) {}

  async execute(paginationDto: PaginationDto): GetGenresUseCaseResp {
    const { total, genres } = await this.genreRepository.getGenres(
      paginationDto
    );

    const { prev, next } = this.buildPagination(
      paginationDto,
      total,
      ResourceType.GENRES,
      ""
    );

    return {
      prev,
      next,
      genres,
    };
  }
}
