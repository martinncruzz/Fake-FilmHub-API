import { GenreEntity, GenreIdDto, PaginationDto } from "../..";

export interface GenresData {
  total: number;
  genres: GenreEntity[];
}

export type GetMoviesByGenreUseCaseResp = Promise<GenreEntity>;

export type GetGenreByIdUseCaseResp = Promise<GenreEntity>;

export type GetGenresUseCaseResp = Promise<GenreEntity[]>;

export interface GetGenreByIdUseCase {
  execute(genreIdDto: GenreIdDto): GetGenreByIdUseCaseResp;
}

export interface GetGenresUseCase {
  execute(paginationDto: PaginationDto): GetGenresUseCaseResp;
}

export interface GetMoviesByGenreUseCase {
  execute(genreIdDto: GenreIdDto): GetMoviesByGenreUseCaseResp;
}
