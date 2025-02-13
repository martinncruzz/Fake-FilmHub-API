import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateMovieDto } from '../../../modules/movies/dtos/create-movie.dto';
import { Movie } from '../../../modules/movies/entities/movie.entity';
import { MovieFiltersDto } from '../../../modules/movies/dtos/movie-filters.dto';
import { MoviesRepository } from '../../../modules/movies/repositories/movies.repository';
import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';
import { PostgresDatabase } from '../../../database/postgres/postgres-database';
import { UpdateMovieDto } from '../../../modules/movies/dtos/update-movie.dto';

@Injectable()
export class MoviesRepositoryImpl implements MoviesRepository {
  private readonly prisma = PostgresDatabase.getClient();

  async findAll(movieFiltersDto: MovieFiltersDto): Promise<{ total: number; movies: Movie[] }> {
    const { page, limit, title, releaseYear, minReleaseYear, maxReleaseYear, genreId } = movieFiltersDto;

    const filters: Prisma.MovieWhereInput = {
      title: { contains: title, mode: 'insensitive' },
      releaseYear: releaseYear ? { equals: releaseYear } : { gte: minReleaseYear, lte: maxReleaseYear },
      genres: { some: { genreId } },
    };

    const [total, movies] = await this.prisma.$transaction([
      this.prisma.movie.count({ where: filters }),
      this.prisma.movie.findMany({
        where: filters,
        skip: (page - 1) * limit,
        take: limit,
        include: { genres: { include: { genre: true } } },
      }),
    ]);

    return { total, movies: movies.map(Movie.fromObject) };
  }

  async findAllByGenreId(genreId: string, paginationDto: PaginationDto): Promise<{ total: number; movies: Movie[] }> {
    const { page, limit } = paginationDto;

    const [total, movies] = await this.prisma.$transaction([
      this.prisma.movie.count({ where: { genres: { some: { genreId } } } }),
      this.prisma.movie.findMany({
        where: { genres: { some: { genreId } } },
        skip: (page - 1) * limit,
        take: limit,
        include: { genres: { include: { genre: true } } },
      }),
    ]);

    return { total, movies: movies.map(Movie.fromObject) };
  }

  async findById(id: string): Promise<Movie | null> {
    const movie = await this.prisma.movie.findUnique({
      where: { id },
      include: { genres: { include: { genre: true } } },
    });

    return movie ? Movie.fromObject(movie) : null;
  }

  async findByTitle(title: string): Promise<Movie | null> {
    const movie = await this.prisma.movie.findFirst({ where: { title } });
    return movie ? Movie.fromObject(movie) : null;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { genreIds, ...createMovieDtoData } = createMovieDto;

    const createdMovie = await this.prisma.movie.create({
      data: { ...createMovieDtoData, genres: { createMany: { data: genreIds.map((genreId) => ({ genreId })) } } },
      include: { genres: { include: { genre: true } } },
    });

    return Movie.fromObject(createdMovie);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const { genreIds, ...updateMovieDtoData } = updateMovieDto;

    const updatedMovie = await this.prisma.movie.update({
      where: { id },
      data: {
        ...updateMovieDtoData,
        ...(genreIds && {
          genres: {
            deleteMany: { movieId: id },
            create: genreIds.map((genreId) => ({ genreId })),
          },
        }),
      },
      include: { genres: { include: { genre: true } } },
    });

    return Movie.fromObject(updatedMovie);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.movie.delete({ where: { id } });
    return true;
  }
}
