import { MovieFiltersDto, PaginationDto } from '../../../application';
import { MovieEntity, PaginationResult } from '../..';

export type GetMoviesUseCaseResp = Promise<PaginationResult & { movies: MovieEntity[] }>;

export interface GetMoviesUseCase {
  execute(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): GetMoviesUseCaseResp;
}
