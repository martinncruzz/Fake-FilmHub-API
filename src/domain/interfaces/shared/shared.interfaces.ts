import { GenreEntity, MovieEntity, PaginationDto, ReviewEntity, UserEntity } from '../..';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum ResourceType {
  USERS = 'users',
  MOVIES = 'movies',
  GENRES = 'genres',
  REVIEWS = 'reviews',
}

export interface PaginationResult {
  prev: string | null;
  next: string | null;
}

export type PartialUserEntity = Partial<UserEntity>;
export type PartialMovieEntity = Partial<MovieEntity>;
export type PartialGenreEntity = Partial<GenreEntity>;
export type PartialReviewEntity = Partial<ReviewEntity>;

export type BuildFiltersQuery<T> = (filters?: T) => string;

export type BuildBaseUrl = (resourceType: ResourceType, additionalPath?: string) => string;

export type BuildPagination = (
  paginationDto: PaginationDto,
  total: number,
  baseUrl: string,
  filtersQuery?: string,
) => PaginationResult;

export type SignToken = (payload: Record<string, any>, duration?: string) => Promise<string | null>;
