import { GenreEntity, UpdateGenreDto } from "../..";

export type UpdateGenreUseCaseResp = Promise<GenreEntity>;

export interface UpdateGenreUseCase {
  execute(updateGenreDto: UpdateGenreDto): UpdateGenreUseCaseResp;
}
