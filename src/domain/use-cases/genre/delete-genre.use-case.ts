import { GenreIdDto } from '../../../application';

export type DeleteGenreUseCaseResp = Promise<boolean>;

export interface DeleteGenreUseCase {
  execute(genreIdDto: GenreIdDto): DeleteGenreUseCaseResp;
}
