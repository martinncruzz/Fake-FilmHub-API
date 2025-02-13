import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';

import { CreateGenreDto } from '../../modules/genres/dtos/create-genre.dto';
import { GenresService } from '../../modules/genres/genres.service';
import { MoviesService } from '../../modules/movies/movies.service';
import { PaginationDto } from '../../modules/shared/dtos/pagination.dto';
import { UpdateGenreDto } from '../../modules/genres/dtos/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(
    private readonly genresService: GenresService,
    private readonly moviesService: MoviesService,
  ) {}

  @Get()
  getGenres(@Query() paginationDto: PaginationDto) {
    return this.genresService.getGenres(paginationDto);
  }

  @Get(':id')
  getGenreById(@Param('id', ParseUUIDPipe) id: string) {
    return this.genresService.getGenreById(id);
  }

  @Get(':id/movies')
  getMoviesByGenreId(@Param('id', ParseUUIDPipe) id: string, @Query() paginationDto: PaginationDto) {
    return this.moviesService.getMoviesByGenreId(id, paginationDto);
  }

  @Post()
  createGenre(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.createGenre(createGenreDto);
  }

  @Patch(':id')
  updateGenre(@Param('id', ParseUUIDPipe) id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.updateGenre(id, updateGenreDto);
  }

  @Delete(':id')
  deleteGenre(@Param('id', ParseUUIDPipe) id: string) {
    return this.genresService.deleteGenre(id);
  }
}
