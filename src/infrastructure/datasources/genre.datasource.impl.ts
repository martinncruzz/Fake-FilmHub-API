import { GenreMapper } from '..';
import { prisma } from '../../data/postgres';
import {
  CreateGenreDto,
  CustomError,
  GenreDatasource,
  GenreEntity,
  GenreIdDto,
  GenresData,
  GenresWithMovies,
  PaginationDto,
  UpdateGenreDto,
} from '../../domain';

export class GenreDatasourceImpl implements GenreDatasource {
  async getGenres(paginationDto: PaginationDto): Promise<GenresData> {
    const { page, limit } = paginationDto;

    const [total, genres] = await prisma.$transaction([
      prisma.genreModel.count(),
      prisma.genreModel.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      total,
      genres: genres.map(GenreMapper.genreEntityFromObject),
    };
  }

  async getGenreById(genreIdDto: GenreIdDto): Promise<GenreEntity> {
    const genre = await prisma.genreModel.findUnique({ where: { genre_id: genreIdDto.genre_id } });

    if (!genre) throw CustomError.notFound('Genre not found');

    return GenreMapper.genreEntityFromObject(genre);
  }

  async getMoviesByGenre(genreIdDto: GenreIdDto, paginationDto: PaginationDto): Promise<GenresWithMovies> {
    const { genre_id } = genreIdDto;
    const { page, limit } = paginationDto;

    const [totalMovies, genreWithMovies] = await prisma.$transaction([
      prisma.movieGenreModel.count({ where: { genre_id } }),
      prisma.genreModel.findUnique({
        where: { genre_id },
        include: { movies: { include: { movie: true }, skip: (page - 1) * limit, take: limit } },
      }),
    ]);

    if (!genreWithMovies) throw CustomError.notFound('User not found');

    return {
      totalMovies,
      genre: GenreMapper.genreEntityFromObject({
        ...genreWithMovies,
        movies: genreWithMovies.movies.map(({ movie }) => movie),
      }),
    };
  }

  async createGenre(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    const genreNameRegistered = await prisma.genreModel.findFirst({
      where: { name: { equals: createGenreDto.name, mode: 'insensitive' } },
    });

    if (genreNameRegistered) throw CustomError.badRequest('This genre name already exists');

    const newGenre = await prisma.genreModel.create({ data: createGenreDto });

    return GenreMapper.genreEntityFromObject(newGenre);
  }

  async updateGenre(updateGenreDto: UpdateGenreDto): Promise<GenreEntity> {
    const { genre_id, ...updateGenreDtoData } = updateGenreDto;

    const genreFromDB = await this.getGenreById({ genre_id });

    if (updateGenreDto.name && updateGenreDto.name.toLowerCase() !== genreFromDB.name.toLowerCase()) {
      const genreNameRegistered = await prisma.genreModel.findFirst({
        where: { name: { equals: updateGenreDto.name, mode: 'insensitive' } },
      });
      if (genreNameRegistered) throw CustomError.badRequest('This genre name already exists');
    }

    const updatedGenre = await prisma.genreModel.update({ where: { genre_id }, data: updateGenreDtoData });

    return GenreMapper.genreEntityFromObject(updatedGenre);
  }

  async deleteGenre(genreIdDto: GenreIdDto): Promise<boolean> {
    const { genre_id } = genreIdDto;

    await this.getGenreById({ genre_id });

    const relatedMovies = await prisma.movieModel.findMany({
      where: { genres: { some: { genre_id } } },
      include: { genres: true },
    });

    if (relatedMovies.length >= 15)
      throw CustomError.badRequest('This genre cannot be deleted because it is linked to too many movies');

    if (relatedMovies.some((movie) => movie.genres.length === 1))
      throw CustomError.badRequest(
        'One or more movies only have this genre. Add more genres or remove the movies before deleting this genre',
      );

    await prisma.$transaction([
      prisma.movieGenreModel.deleteMany({ where: { genre_id } }),
      prisma.genreModel.delete({ where: { genre_id } }),
    ]);

    return true;
  }
}
