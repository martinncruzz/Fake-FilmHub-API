import { Prisma } from '@prisma/client';

import { MovieMapper } from '..';
import { prisma } from '../../data/postgres';
import {
  CreateMovieDto,
  CustomError,
  MovieDatasource,
  MovieEntity,
  MovieFiltersDto,
  MovieIdDto,
  MoviesData,
  PaginationDto,
  UpdateMovieDto,
} from '../../domain';

export class MovieDatasourceImpl implements MovieDatasource {
  async getMovies(paginationDto: PaginationDto, movieFiltersDto: MovieFiltersDto): Promise<MoviesData> {
    const { page, limit } = paginationDto;
    const { title, release_year, min_release_year, max_release_year, genre_id } = movieFiltersDto;

    const movieFilters: Prisma.MovieModelWhereInput = {
      title: { contains: title, mode: 'insensitive' },
      release_year: release_year ? { equals: release_year } : { gte: min_release_year, lte: max_release_year },
      genres: { some: { genre_id } },
    };

    const [total, movies] = await prisma.$transaction([
      prisma.movieModel.count({
        where: movieFilters,
      }),
      prisma.movieModel.findMany({
        where: movieFilters,
        include: { genres: { include: { genre: true } } },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      total,
      movies: movies.map((movie) =>
        MovieMapper.movieEntityFromObject({
          ...movie,
          genres: movie.genres.map(({ genre }) => genre),
        }),
      ),
    };
  }

  async getMovieById(movieIdDto: MovieIdDto): Promise<MovieEntity> {
    const movie = await prisma.movieModel.findFirst({
      where: { movie_id: movieIdDto.movie_id },
      include: { genres: { include: { genre: true } } },
    });

    if (!movie) throw CustomError.notFound('Movie not found');

    return MovieMapper.movieEntityFromObject({
      ...movie,
      genres: movie.genres.map(({ genre }) => genre),
    });
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const { genre_ids, ...createMovieDtoData } = createMovieDto;

    const genresFromDB = await prisma.genreModel.findMany({
      where: { genre_id: { in: genre_ids } },
    });

    if (genresFromDB.length !== genre_ids.length) throw CustomError.badRequest('One or more genre_ids are invalid');

    const newMovie = await prisma.movieModel.create({
      data: {
        ...createMovieDtoData,
        genres: {
          createMany: { data: genre_ids.map((genre_id) => ({ genre_id })) },
        },
      },
      include: { genres: { include: { genre: true } } },
    });

    return MovieMapper.movieEntityFromObject({
      ...newMovie,
      genres: newMovie.genres.map(({ genre }) => genre),
    });
  }

  async updateMovie(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    const { movie_id, genre_ids, ...updateMovieDtoData } = updateMovieDto;

    const movieFromDB = await this.getMovieById({ movie_id });

    if (!genre_ids || genre_ids.length === 0) {
      const updatedMovie = await prisma.movieModel.update({
        where: { movie_id },
        data: updateMovieDtoData,
        include: { genres: { include: { genre: true } } },
      });

      return MovieMapper.movieEntityFromObject({
        ...updatedMovie,
        genres: updatedMovie.genres.map(({ genre }) => genre),
      });
    }

    const genresFromDB = await prisma.genreModel.findMany({
      where: { genre_id: { in: genre_ids } },
    });

    if (genresFromDB.length !== genre_ids.length) throw CustomError.badRequest('One or more genre_ids are invalid');

    const genreIdsFromMovie = movieFromDB.genres!.map(({ genre_id }) => genre_id);

    const genreIdsToDelete = genre_ids.filter((genre_id) => genreIdsFromMovie.includes(genre_id));
    const genreIdsToAdd = genre_ids.filter((genre_id) => !genreIdsFromMovie.includes(genre_id));

    if (genreIdsFromMovie.length === genreIdsToDelete.length && genreIdsToAdd.length === 0)
      throw CustomError.badRequest('A movie must have a genre at least');

    const updatedMovie = await prisma.movieModel.update({
      where: { movie_id },
      data: {
        ...updateMovieDtoData,
        genres: {
          delete: genreIdsToDelete.map((genre_id) => ({
            movie_id_genre_id: { genre_id, movie_id },
          })),
          create: genreIdsToAdd.map((genre_id) => ({ genre_id })),
        },
      },
      include: { genres: { include: { genre: true } } },
    });

    return MovieMapper.movieEntityFromObject({
      ...updatedMovie,
      genres: updatedMovie.genres.map(({ genre }) => genre),
    });
  }

  async deleteMovie(movieIdDto: MovieIdDto): Promise<boolean> {
    const { movie_id } = movieIdDto;

    await this.getMovieById({ movie_id });

    await prisma.$transaction([
      prisma.movieGenreModel.deleteMany({ where: { movie_id } }),
      prisma.movieModel.delete({ where: { movie_id } }),
    ]);

    return true;
  }
}
