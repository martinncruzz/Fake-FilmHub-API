import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { buildBaseUrl } from '@modules/shared/utils/base-url.builder';
import { buildPagination } from '@modules/shared/utils/pagination.builder';
import { CreateMovieDto } from '@modules/movies/dtos/create-movie.dto';
import { GenresService } from '@modules/genres/genres.service';
import { Movie } from '@modules/movies/entities/movie.entity';
import { MovieFiltersDto } from '@modules/movies/dtos/movie-filters.dto';
import { MovieGenresRepository } from '@modules/movies/repositories/movie-genres.repository';
import { MoviesRepository } from '@modules/movies/repositories/movies.repository';
import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { ResourceType } from '@modules/shared/interfaces/enums';
import { ReviewsService } from '@modules/reviews/reviews.service';
import { UpdateMovieDto } from '@modules/movies/dtos/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository,
    private readonly movieGenresRepository: MovieGenresRepository,

    @Inject(forwardRef(() => GenresService))
    private readonly genresService: GenresService,

    @Inject(forwardRef(() => ReviewsService))
    private readonly reviewsService: ReviewsService,
  ) {}

  async getMovies(
    movieFiltersDto: MovieFiltersDto,
  ): Promise<{ prev: string | null; next: string | null; movies: Movie[] }> {
    const { total, movies } = await this.moviesRepository.findAll(movieFiltersDto);

    if (movies.some((movie) => !movie.genres || movie.genres.some((movieGenre) => !movieGenre.genre))) {
      throw new InternalServerErrorException('Movies data is incomplete');
    }

    const baseUrl = buildBaseUrl(ResourceType.MOVIES);
    const { prev, next } = buildPagination(movieFiltersDto, total, baseUrl);

    return {
      prev,
      next,
      movies: movies.map((movie) => ({ ...movie, genres: movie.genres!.map((movieGenre) => movieGenre.genre!) })),
    };
  }

  async getMoviesByGenreId(
    genreId: string,
    paginationDto: PaginationDto,
  ): Promise<{ prev: string | null; next: string | null; movies: Movie[] }> {
    const { total, movies } = await this.moviesRepository.findAllByGenreId(genreId, paginationDto);

    if (movies.some((movie) => !movie.genres || movie.genres.some((movieGenre) => !movieGenre.genre))) {
      throw new InternalServerErrorException('Movies data is incomplete');
    }

    const baseUrl = buildBaseUrl(ResourceType.GENRES, `/${genreId}/movies`);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return {
      prev,
      next,
      movies: movies.map((movie) => ({ ...movie, genres: movie.genres!.map((movieGenre) => movieGenre.genre!) })),
    };
  }

  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.moviesRepository.findById(id);

    if (!movie) throw new NotFoundException(`Movie with id "${id}" not found`);

    if (!movie.genres || movie.genres.some((movieGenre) => !movieGenre.genre)) {
      throw new InternalServerErrorException('Movie data is incomplete');
    }

    return {
      ...movie,
      genres: movie.genres!.map((movieGenre) => movieGenre.genre!),
    };
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movieExists = await this.moviesRepository.findByTitle(createMovieDto.title);
    if (movieExists) throw new BadRequestException(`Movie with the title "${createMovieDto.title}" already registered`);

    const genres = await this.genresService.getGenresByIds(createMovieDto.genreIds);
    if (genres.length !== createMovieDto.genreIds.length) {
      throw new BadRequestException('Some genres are not registered');
    }

    const createdMovie = await this.moviesRepository.create(createMovieDto);

    if (!createdMovie.genres || createdMovie.genres.some((movieGenre) => !movieGenre.genre)) {
      throw new InternalServerErrorException('Movie data is incomplete');
    }

    return {
      ...createdMovie,
      genres: createdMovie.genres!.map((movieGenre) => movieGenre.genre!),
    };
  }

  async updateMovie(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const { genreIds, ...updateMovieDtoData } = updateMovieDto;

    const movie = await this.getMovieById(id);

    if (!genreIds) {
      const updatedMovie = await this.moviesRepository.update(id, updateMovieDto);

      if (!updatedMovie.genres || updatedMovie.genres.some((movieGenre) => !movieGenre.genre)) {
        throw new InternalServerErrorException('Movie data is incomplete');
      }

      return {
        ...updatedMovie,
        genres: updatedMovie.genres!.map((movieGenre) => movieGenre.genre!),
      };
    }

    const genres = await this.genresService.getGenresByIds(genreIds);
    if (genres.length !== genreIds.length) throw new BadRequestException('Some genres are not registered');

    const currentGenres = movie.genres!.map((genre) => genre.id!);
    const genresToAdd = genreIds.filter((genreId) => !currentGenres.includes(genreId));
    const genresToRemove = genreIds.filter((genreId) => currentGenres.includes(genreId));

    if (currentGenres.length === genresToRemove.length && genresToAdd.length === 0) {
      throw new BadRequestException('A movie must have a genre at least');
    }

    const finalGenres = currentGenres.filter((genreId) => !genresToRemove.includes(genreId)).concat(genresToAdd);

    const updatedMovie = await this.moviesRepository.update(id, { ...updateMovieDtoData, genreIds: finalGenres });

    if (!updatedMovie.genres || updatedMovie.genres.some((movieGenre) => !movieGenre.genre)) {
      throw new InternalServerErrorException('Movie data is incomplete');
    }

    return {
      ...updatedMovie,
      genres: updatedMovie.genres!.map((movieGenre) => movieGenre.genre!),
    };
  }

  async deleteMovie(id: string): Promise<boolean> {
    await this.getMovieById(id);

    await this.reviewsService.deleteReviewsByMovieId(id);
    await this.movieGenresRepository.deleteManyByMovieId(id);
    await this.moviesRepository.delete(id);

    return true;
  }

  async validateDeletionByGenreId(genreId: string): Promise<boolean> {
    const { movies } = await this.moviesRepository.findAllByGenreId(genreId, {
      page: 1,
      limit: Number.MAX_SAFE_INTEGER,
    });

    if (movies.some((movie) => !movie.genres || movie.genres.some((movieGenre) => !movieGenre.genre))) {
      throw new InternalServerErrorException('Movies data is incomplete');
    }

    if (movies.length >= 15) {
      throw new BadRequestException('This genre cannot be deleted because it is linked to too many movies');
    }

    if (movies.some((movie) => movie.genres!.length === 1)) {
      throw new BadRequestException('One or more movies only have this genre');
    }

    return true;
  }
}
