import { GenreIdDto } from '../../../application';
import { GenreEntity } from '../..';

export type GetGenreByIdUseCaseResp = Promise<GenreEntity>;

export interface GetGenreByIdUseCase {
  execute(genreIdDto: GenreIdDto): GetGenreByIdUseCaseResp;
}
