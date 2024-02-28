import {
  CreateGenreDto,
  GenreIdDto,
  UpdateGenreDto,
  PaginationDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";

export class GenreService {
  constructor() {}

  async getGenres(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const genres = await prisma.genre.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return genres;
  }

  async getMoviesByGenre(genreIdDto: GenreIdDto) {
    const moviesInCurrentGenre = await prisma.genre.findFirst({
      where: {
        genre_id: genreIdDto.genre_id,
      },
      include: {
        movies: {
          include: {
            movie: true,
          },
        },
      },
    });

    return {
      ...moviesInCurrentGenre,
      movies: moviesInCurrentGenre?.movies.map((movieData) => movieData.movie),
    };
  }

  async getGenreById(genreIdDto: GenreIdDto) {
    const genreFound = await this.validateGenreExistence(genreIdDto.genre_id);
    return genreFound;
  }

  async createGenre(createGenreDto: CreateGenreDto) {
    await this.validateGenreName(createGenreDto.name);

    try {
      const genre = await prisma.genre.create({
        data: createGenreDto,
      });

      return genre;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateGenre(updateGenreDto: UpdateGenreDto) {
    const { genre_id, ...updatedGenreDtoData } = updateGenreDto;

    const genreExists = await this.validateGenreExistence(genre_id);

    if (
      updateGenreDto.name &&
      updateGenreDto.name.toLowerCase() !== genreExists.name.toLowerCase()
    )
      await this.validateGenreName(updateGenreDto.name);

    try {
      const updatedGenre = await prisma.genre.update({
        where: {
          genre_id: updateGenreDto.genre_id,
        },
        data: updatedGenreDtoData,
      });

      return updatedGenre;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteGenre(genreIdDto: GenreIdDto) {
    await this.validateGenreExistence(genreIdDto.genre_id);

    await this.validateGenreRelations(genreIdDto.genre_id);

    try {
      await prisma.$transaction([
        prisma.movieGenre.deleteMany({
          where: {
            genre_id: genreIdDto.genre_id,
          },
        }),
        prisma.genre.delete({
          where: { genre_id: genreIdDto.genre_id },
        }),
      ]);

      return true;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  private async validateGenreExistence(genre_id: number) {
    const genreExists = await prisma.genre.findFirst({
      where: {
        genre_id: genre_id,
      },
    });

    if (!genreExists) throw CustomError.notFound("Genre not found");

    return genreExists;
  }

  private async validateGenreName(genreName: string) {
    const genreExists = await prisma.genre.findFirst({
      where: {
        name: {
          equals: genreName,
          mode: "insensitive",
        },
      },
    });

    if (genreExists)
      throw CustomError.badRequest("This genre name already exists");

    return genreExists;
  }

  private async validateGenreRelations(genre_id: number) {
    const moviesWithCurrentGenre = await prisma.movie.findMany({
      where: {
        genres: {
          some: {
            genre_id: genre_id,
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

    if (moviesWithCurrentGenre.length >= 15)
      throw CustomError.badRequest(
        "You can't delete this genre because it is highly related to multiple films"
      );

    if (!moviesWithCurrentGenre.every((movie) => movie.genres.length > 1))
      throw CustomError.badRequest(
        "There are one or more movies that have only this genre. Add more genres or remove them"
      );
  }
}
