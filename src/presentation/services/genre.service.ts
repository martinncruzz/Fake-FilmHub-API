import {
  CreateGenreDto,
  GenreIdDto,
  UpdateGenreDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";

export class GenreService {
  constructor() {}

  async getGenres() {
    const genres = await prisma.genre.findMany();
    return genres;
  }

  async getGenreById(genreIdDto: GenreIdDto) {
    const genreFound = await prisma.genre.findFirst({
      where: {
        genre_id: genreIdDto.genre_id,
      },
    });

    if (!genreFound) throw CustomError.notFound("Genre not found");

    return genreFound;
  }

  async createGenre(createGenreDto: CreateGenreDto) {
    try {
      const genre = await prisma.genre.create({
        data: createGenreDto,
      });

      return genre;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateGenre(updateGenreDto: UpdateGenreDto) {
    const { genre_id, ...updatedGenreDtoData } = updateGenreDto;

    const genreExists = await prisma.genre.findFirst({
      where: {
        genre_id: updateGenreDto.genre_id,
      },
    });

    if (!genreExists) throw CustomError.notFound("Genre not found");

    try {
      const updatedGenre = await prisma.genre.update({
        where: {
          genre_id: updateGenreDto.genre_id,
        },
        data: updatedGenreDtoData,
      });

      return updatedGenre;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteGenre(genreIdDto: GenreIdDto) {
    const genreExists = await prisma.genre.findFirst({
      where: {
        genre_id: genreIdDto.genre_id,
      },
    });

    if (!genreExists) throw CustomError.notFound("Genre not found");

    try {
      await prisma.genre.delete({
        where: { genre_id: genreIdDto.genre_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
