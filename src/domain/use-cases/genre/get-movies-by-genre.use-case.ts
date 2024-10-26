import { GenreIdDto, PaginationDto } from '../../../application';
import { GenreEntity, PaginationResult, PartialMovieEntity } from '../..';

export type GetMoviesByGenreUseCaseResp = Promise<
  Omit<GenreEntity, 'movies'> & { movies: PaginationResult & { totalMovies: number; data: PartialMovieEntity[] } }
>;

export interface GetMoviesByGenreUseCase {
  execute(genreIdDto: GenreIdDto, paginationDto: PaginationDto): GetMoviesByGenreUseCaseResp;
}
