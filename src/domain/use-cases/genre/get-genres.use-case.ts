import {
  BuildPagination,
  GenreRepository,
  GetGenresUseCase,
  GetGenresUseCaseResp,
  PaginationBuilder,
  PaginationDto,
  ResourceType,
} from '../..';
import { envs } from '../../../config';

export class GetGenresUseCaseImpl implements GetGenresUseCase {
  constructor(
    private readonly genreRepository: GenreRepository,
    private readonly buildPagination: BuildPagination = PaginationBuilder.build,
  ) {}

  async execute(paginationDto: PaginationDto): GetGenresUseCaseResp {
    const { total, genres } = await this.genreRepository.getGenres(paginationDto);

    const baseUrl = `${envs.WEBSERVICE_URL}/${ResourceType.GENRES}`;
    const { prev, next } = this.buildPagination(paginationDto, total, baseUrl, '');

    return {
      prev,
      next,
      genres,
    };
  }
}
