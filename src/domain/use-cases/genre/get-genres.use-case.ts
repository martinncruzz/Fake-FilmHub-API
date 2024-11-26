import { PaginationDto } from '../../../application';
import { GenreEntity, PaginationResult } from '../..';

export type GetGenresUseCaseResp = Promise<PaginationResult & { genres: GenreEntity[] }>;

export interface GetGenresUseCase {
  execute(paginationDto: PaginationDto): GetGenresUseCaseResp;
}
