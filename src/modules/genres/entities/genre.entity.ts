import { InternalServerErrorException } from '@nestjs/common';

import { GenreSchema } from '../../../config/schemas/genre.schema';
import { MovieGenre } from '../../../modules/movies/entities/movie-genre.entity';
import { ValidatorAdapter } from '../../../config/adapters/validator.adapter';

export class Genre {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly imageUrl: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly movies?: Partial<MovieGenre>[],
  ) {}

  static fromObject(object: Record<string, any>): Genre {
    const { success, data } = ValidatorAdapter.validate(object, GenreSchema);

    if (!success) throw new InternalServerErrorException('Error processing genre data');

    return new Genre(data.id, data.name, data.imageUrl, data.createdAt, data.updatedAt, data.movies);
  }
}
