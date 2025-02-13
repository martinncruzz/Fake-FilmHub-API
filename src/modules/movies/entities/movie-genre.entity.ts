import { InternalServerErrorException } from '@nestjs/common';

import { Genre } from '../../../modules/genres/entities/genre.entity';
import { Movie } from '../../../modules/movies/entities/movie.entity';
import { MovieGenreSchema } from '../../../config/schemas/movie.schema';
import { ValidatorAdapter } from '../../../config/adapters/validator.adapter';

export class MovieGenre {
  constructor(
    public readonly id: string,
    public readonly movieId: string,
    public readonly genreId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly movie?: Partial<Movie>,
    public readonly genre?: Partial<Genre>,
  ) {}

  static fromObject(object: Record<string, any>): MovieGenre {
    const { success, data } = ValidatorAdapter.validate(object, MovieGenreSchema);

    if (!success) throw new InternalServerErrorException('Error processing movie genre data');

    return new MovieGenre(data.id, data.movieId, data.genreId, data.createdAt, data.updatedAt, data.movie, data.genre);
  }
}
