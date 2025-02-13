import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';

export function buildPagination(
  paginationDto: PaginationDto,
  total: number,
  baseUrl: string,
  filtersQuery: string = '',
): { prev: string | null; next: string | null } {
  const { page, limit } = paginationDto;

  const prev = page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}${filtersQuery}` : null;
  const next = limit * page < total ? `${baseUrl}?page=${page + 1}&limit=${limit}${filtersQuery}` : null;

  return { prev, next };
}
