import { GenreIdDto } from '../..';

export type DeleteGenreUseCaseResp = Promise<boolean>;

export interface DeleteGenreUseCase {
  execute(genreIdDto: GenreIdDto): DeleteGenreUseCaseResp;
}
