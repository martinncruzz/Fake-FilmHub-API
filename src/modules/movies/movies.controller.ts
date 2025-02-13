import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';

import { CreateMovieDto } from '../../modules/movies/dtos/create-movie.dto';
import { MovieFiltersDto } from '../../modules/movies/dtos/movie-filters.dto';
import { MoviesService } from '../../modules/movies/movies.service';
import { PaginationDto } from '../../modules/shared/dtos/pagination.dto';
import { ReviewsService } from '../../modules/reviews/reviews.service';
import { UpdateMovieDto } from '../../modules/movies/dtos/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly reviewsService: ReviewsService,
  ) {}

  @Get()
  getMovies(@Query() movieFiltersDto: MovieFiltersDto) {
    return this.moviesService.getMovies(movieFiltersDto);
  }

  @Get(':id')
  getMovieById(@Param('id', ParseUUIDPipe) id: string) {
    return this.moviesService.getMovieById(id);
  }

  @Get(':id/reviews')
  getReviewsByMovieId(@Param('id', ParseUUIDPipe) id: string, @Query() paginationDto: PaginationDto) {
    return this.reviewsService.getReviewsByMovieId(id, paginationDto);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Patch(':id')
  updateMovie(@Param('id', ParseUUIDPipe) id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, updateMovieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id', ParseUUIDPipe) id: string) {
    return this.moviesService.deleteMovie(id);
  }
}
