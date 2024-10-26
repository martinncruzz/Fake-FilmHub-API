import { PaginationDto } from '../../../application';
import { PaginationResult, ResourceType } from '../..';

export type BuildFiltersQuery<T> = (filters?: T) => string;

export type BuildBaseUrl = (resourceType: ResourceType, additionalPath?: string) => string;

export type BuildPagination = (
  paginationDto: PaginationDto,
  total: number,
  baseUrl: string,
  filtersQuery?: string,
) => PaginationResult;

export type SignToken = (payload: Record<string, any>, duration?: string) => Promise<string | null>;
