import { CreateGenreDto } from '@modules/genres/dtos/create-genre.dto';
import { Genre } from '@modules/genres/entities/genre.entity';
import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { UpdateGenreDto } from '@modules/genres/dtos/update-genre.dto';

export abstract class GenresRepository {
  abstract findAll(paginationDto: PaginationDto): Promise<{ total: number; genres: Genre[] }>;
  abstract findByIds(ids: string[]): Promise<Genre[]>;
  abstract findById(id: string): Promise<Genre | null>;
  abstract findByName(name: string): Promise<Genre | null>;
  abstract create(createGenreDto: CreateGenreDto): Promise<Genre>;
  abstract update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre>;
  abstract delete(id: string): Promise<boolean>;
}
