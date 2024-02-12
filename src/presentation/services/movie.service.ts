import {
  CreateMovieDto,
  MovieIdDto,
  UpdateMovieDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";

export class MovieService {
  constructor() {}

  async getMovies() {
    const movies = await prisma.movie.findMany();
    return movies;
  }

  async getMovieById(movieIdDto: MovieIdDto) {
    const movieFound = await prisma.movie.findFirst({
      where: {
        movie_id: movieIdDto.movie_id,
      },
    });

    if (!movieFound) throw CustomError.notFound("Movie not found");

    return movieFound;
  }

  async createMovie(createMovieDto: CreateMovieDto) {
    try {
      const newMovie = await prisma.movie.create({
        data: createMovieDto,
      });

      return newMovie;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateMovie(updateMovieDto: UpdateMovieDto) {
    const { movie_id, ...updateMovieDtoData } = updateMovieDto;

    const movieExists = await prisma.movie.findFirst({
      where: {
        movie_id: movie_id,
      },
    });

    if (!movieExists) throw CustomError.notFound("Movie not found");

    try {
      const updatedMovie = await prisma.movie.update({
        where: {
          movie_id: movie_id,
        },
        data: updateMovieDtoData,
      });

      return updatedMovie;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deletemovie(movieIdDto: MovieIdDto) {
    const movieExists = await prisma.movie.findFirst({
      where: {
        movie_id: movieIdDto.movie_id,
      },
    });

    if (!movieExists) throw CustomError.notFound("Movie not found");

    try {
      await prisma.movie.delete({
        where: { movie_id: movieIdDto.movie_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
