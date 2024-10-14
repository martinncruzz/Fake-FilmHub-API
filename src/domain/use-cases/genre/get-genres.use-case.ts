import {
  BaseUrlBuilder,
  BuildBaseUrl,
  BuildPagination,
  GenreRepository,
  GetGenresUseCase,
  GetGenresUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
} from '../..';

export class GetGenresUseCaseImpl implements GetGenresUseCase {
  constructor(
    private readonly genreRepository: GenreRepository,
    private readonly buildBaseUrl: BuildBaseUrl = BaseUrlBuilder.build,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetGenresUseCaseResp {
    const { total, genres } = await this.genreRepository.getGenres(paginationDto);

    const baseUrl = this.buildBaseUrl(ResourceType.GENRES);
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      genres,
    };
  }
}
