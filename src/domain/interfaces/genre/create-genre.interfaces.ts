import { CreateGenreDto, GenreEntity } from "../..";

export type CreateGenreUseCaseResp = Promise<GenreEntity>;

export interface CreateGenreUseCase {
  execute(createGenreDto: CreateGenreDto): CreateGenreUseCaseResp;
}
