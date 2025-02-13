import { Injectable } from '@nestjs/common';

import { MovieGenresRepository } from '../../../modules/movies/repositories/movie-genres.repository';
import { PostgresDatabase } from '../../../database/postgres/postgres-database';

@Injectable()
export class MovieGenresRepositoryImpl implements MovieGenresRepository {
  private readonly prisma = PostgresDatabase.getClient();

  async deleteManyByMovieId(movieId: string): Promise<boolean> {
    await this.prisma.movieGenre.deleteMany({ where: { movieId } });
    return true;
  }

  async deleteManyByGenreId(genreId: string): Promise<boolean> {
    await this.prisma.movieGenre.deleteMany({ where: { genreId } });
    return true;
  }
}
