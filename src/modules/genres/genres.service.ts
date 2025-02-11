import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';

import { buildBaseUrl } from '@modules/shared/utils/base-url.builder';
import { buildPagination } from '@modules/shared/utils/pagination.builder';
import { CreateGenreDto } from '@modules/genres/dtos/create-genre.dto';
import { Genre } from '@modules/genres/entities/genre.entity';
import { GenresRepository } from '@modules/genres/repositories/genres.repository';
import { MovieGenresRepository } from '@modules/movies/repositories/movie-genres.repository';
import { MoviesService } from '@modules/movies/movies.service';
import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { ResourceType } from '@modules/shared/interfaces/enums';
import { UpdateGenreDto } from '@modules/genres/dtos/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(
    private readonly genresRepository: GenresRepository,
    private readonly movieGenresRepository: MovieGenresRepository,

    @Inject(forwardRef(() => MoviesService))
    private readonly moviesService: MoviesService,
  ) {}

  async getGenres(
    paginationDto: PaginationDto,
  ): Promise<{ prev: string | null; next: string | null; genres: Genre[] }> {
    const { total, genres } = await this.genresRepository.findAll(paginationDto);

    const baseUrl = buildBaseUrl(ResourceType.GENRES);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return { prev, next, genres };
  }

  async getGenresByIds(ids: string[]): Promise<Genre[]> {
    const genres = await this.genresRepository.findByIds(ids);
    return genres;
  }

  async getGenreById(id: string): Promise<Genre> {
    const genre = await this.genresRepository.findById(id);

    if (!genre) throw new NotFoundException(`Genre with id "${id}" not found`);

    return genre;
  }

  async createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genreExists = await this.genresRepository.findByName(createGenreDto.name);

    if (genreExists) throw new BadRequestException(`Genre with the name "${createGenreDto.name}" already registered`);

    return this.genresRepository.create(createGenreDto);
  }

  async updateGenre(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const genre = await this.getGenreById(id);

    if (updateGenreDto.name && updateGenreDto.name !== genre.name) {
      const genreExists = await this.genresRepository.findByName(updateGenreDto.name);
      if (genreExists) throw new BadRequestException(`Genre with the name "${updateGenreDto.name}" already registered`);
    }

    return this.genresRepository.update(id, updateGenreDto);
  }

  async deleteGenre(id: string): Promise<boolean> {
    await this.getGenreById(id);
    await this.moviesService.validateDeletionByGenreId(id);

    await this.movieGenresRepository.deleteManyByGenreId(id);
    await this.genresRepository.delete(id);

    return true;
  }
}
