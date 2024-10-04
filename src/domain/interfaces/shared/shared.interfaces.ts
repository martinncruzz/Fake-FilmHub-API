import { PaginationDto } from '../..';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum ResourceType {
  USERS = 'users',
  MOVIES = 'movies',
  GENRES = 'genres',
}

export interface PaginationResult {
  prev: string | null;
  next: string | null;
}

export type BuildFiltersQuery<T> = (filters?: T) => string;

export type BuildPagination = (
  paginationDto: PaginationDto,
  total: number,
  resourceType: ResourceType,
  filtersQuery?: string,
) => PaginationResult;

export type SignToken = (payload: Record<string, any>, duration?: string) => Promise<string | null>;
