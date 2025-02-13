import { Injectable } from '@nestjs/common';

import { CreateGenreDto } from '../../../modules/genres/dtos/create-genre.dto';
import { Genre } from '../../../modules/genres/entities/genre.entity';
import { GenresRepository } from '../../../modules/genres/repositories/genres.repository';
import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';
import { PostgresDatabase } from '../../../database/postgres/postgres-database';
import { UpdateGenreDto } from '../../../modules/genres/dtos/update-genre.dto';

@Injectable()
export class GenresRepositoryImpl implements GenresRepository {
  private readonly prisma = PostgresDatabase.getClient();

  async findAll(paginationDto: PaginationDto): Promise<{ total: number; genres: Genre[] }> {
    const { page, limit } = paginationDto;

    const [total, genres] = await this.prisma.$transaction([
      this.prisma.genre.count(),
      this.prisma.genre.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return { total, genres: genres.map(Genre.fromObject) };
  }

  async findByIds(ids: string[]): Promise<Genre[]> {
    const genres = await this.prisma.genre.findMany({ where: { id: { in: ids } } });
    return genres.map(Genre.fromObject);
  }

  async findById(id: string): Promise<Genre | null> {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    return genre ? Genre.fromObject(genre) : null;
  }

  async findByName(name: string): Promise<Genre | null> {
    const genre = await this.prisma.genre.findFirst({ where: { name } });
    return genre ? Genre.fromObject(genre) : null;
  }

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const createdGenre = await this.prisma.genre.create({ data: createGenreDto });
    return Genre.fromObject(createdGenre);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const updatedGenre = await this.prisma.genre.update({ where: { id }, data: updateGenreDto });
    return Genre.fromObject(updatedGenre);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.genre.delete({ where: { id } });
    return true;
  }
}
