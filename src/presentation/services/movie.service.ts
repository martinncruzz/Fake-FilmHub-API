import {
  CreateMovieDto,
  MovieIdDto,
  UpdateMovieDto,
  PaginationDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";
import { envs } from "../../config";

export class MovieService {
  constructor() {}

  async getMovies(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    try {
      const [total, movies] = await Promise.all([
        prisma.movie.count(),

        prisma.movie.findMany({
          include: {
            genres: {
              include: {
                genre: true,
              },
            },
          },
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);

      const next =
        limit * page >= total
          ? null
          : `${envs.WEBSERVICE_URL}/movies/get-movies?page=${page + 1}&limit=${limit}`;

      const prev =
        page - 1 === 0
          ? null
          : `${envs.WEBSERVICE_URL}/movies/get-movies?page=${page - 1}&limit=${limit}`;

      return {
        prev: prev,
        next: next,
        movies: movies.map((movie) => ({
          ...movie,
          genres: movie.genres.map((genreData) => genreData.genre),
        })),
      };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async getMovieById(movieIdDto: MovieIdDto) {
    const movieFound = await this.validateMovieExistence(movieIdDto.movie_id);

    return {
      ...movieFound,
      genres: movieFound.genres.map((genreData) => genreData.genre),
    };
  }

  async createMovie(createMovieDto: CreateMovieDto) {
    const { genre_ids, ...createMovieDtoData } = createMovieDto;

    const validIds = await this.validateGenreIds(genre_ids);

    try {
      const newMovie = await prisma.movie.create({
        data: {
          ...createMovieDtoData,
          genres: {
            createMany: {
              data: validIds.map((genre_id) => ({ genre_id })),
            },
          },
        },
        include: {
          genres: {
            include: {
              genre: true,
            },
          },
        },
      });

      return {
        ...newMovie,
        genres: newMovie.genres.map((genreData) => genreData.genre),
      };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateMovie(updateMovieDto: UpdateMovieDto) {
    const { movie_id, genre_ids, ...updateMovieDtoData } = updateMovieDto;

    await this.validateMovieExistence(movie_id);

    if (!genre_ids) {
      try {
        const updatedMovie = await prisma.movie.update({
          where: {
            movie_id: movie_id,
          },
          data: updateMovieDtoData,
          include: {
            genres: {
              include: {
                genre: true,
              },
            },
          },
        });

        return {
          ...updatedMovie,
          genres: updatedMovie.genres.map((genreData) => genreData.genre),
        };
      } catch (error) {
        console.log(error);
        throw CustomError.internalServer(`${error}`);
      }
    }

    const currentGenreIds = await this.getCurrentGenreIds(movie_id);

    const validIds = await this.validateGenreIds(genre_ids);

    const genreIdsToDelete = this.calculateGenresToDelete(
      currentGenreIds,
      validIds
    );
    const genreIdsToAdd = this.calculateGenresToAdd(currentGenreIds, validIds);

    if (
      currentGenreIds.length === genreIdsToDelete.length &&
      genreIdsToAdd.length === 0
    )
      throw CustomError.badRequest("A movie must have a genre at least");

    try {
      const updatedMovie = await prisma.movie.update({
        where: {
          movie_id: movie_id,
        },
        data: {
          ...updateMovieDtoData,
          genres: {
            delete: genreIdsToDelete.map((id) => ({
              movie_id_genre_id: { genre_id: id, movie_id: movie_id },
            })),
            create: genreIdsToAdd.map((id) => ({ genre_id: id })),
          },
        },
        include: {
          genres: {
            select: {
              genre: true,
            },
          },
        },
      });

      return {
        ...updatedMovie,
        genres: updatedMovie.genres.map((genreData) => genreData.genre),
      };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteMovie(movieIdDto: MovieIdDto) {
    await this.validateMovieExistence(movieIdDto.movie_id);

    try {
      await prisma.$transaction([
        prisma.movieGenre.deleteMany({
          where: {
            movie_id: movieIdDto.movie_id,
          },
        }),
        prisma.movie.delete({
          where: { movie_id: movieIdDto.movie_id },
        }),
      ]);

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  private async validateMovieExistence(movie_id: number) {
    const movieExists = await prisma.movie.findFirst({
      where: {
        movie_id: movie_id,
      },
      include: {
        genres: {
          include: {
            genre: true,
          },
        },
      },
    });

    if (!movieExists) throw CustomError.notFound("Movie not found");

    return movieExists;
  }

  private async getCurrentGenreIds(movie_id: number) {
    const currentGenres = await prisma.movieGenre.findMany({
      where: {
        movie_id: movie_id,
      },
      select: {
        genre_id: true,
      },
    });

    return currentGenres.map((genre) => genre.genre_id);
  }

  private async validateGenreIds(genreIds: number[]) {
    const validIds = await prisma.genre.findMany({
      where: {
        genre_id: {
          in: genreIds,
        },
      },
    });

    if (validIds.length !== genreIds.length)
      throw CustomError.badRequest("One or more genre ids are invalid");

    return validIds.map((genreData) => genreData.genre_id);
  }

  private calculateGenresToDelete(
    currentGenreIds: number[],
    genreIds: number[]
  ) {
    return currentGenreIds.filter((id) => genreIds.includes(id));
  }

  private calculateGenresToAdd(currentGenreIds: number[], genreIds: number[]) {
    return genreIds.filter((id) => !currentGenreIds.includes(id));
  }
}
