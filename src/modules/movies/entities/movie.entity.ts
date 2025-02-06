import { InternalServerErrorException } from '@nestjs/common';

import { MovieGenre } from '@modules/movies/entities/movie-genre.entity';
import { MovieSchema } from '@config/schemas/movie.schema';
import { Review } from '@modules/reviews/entities/review.entity';
import { ValidatorAdapter } from '@config/adapters/validator.adapter';

export class Movie {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly releaseYear: number,
    public readonly director: string,
    public readonly durationMinutes: number,
    public readonly trailerLink: string,
    public readonly posterImageUrl: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly genres?: Partial<MovieGenre>[],
    public readonly reviews?: Partial<Review>[],
  ) {}

  static fromObject(object: Record<string, any>): Movie {
    const { success, data } = ValidatorAdapter.validate(object, MovieSchema);

    if (!success) throw new InternalServerErrorException('Error processing movie data');

    return new Movie(
      data.id,
      data.title,
      data.description,
      data.releaseYear,
      data.director,
      data.durationMinutes,
      data.trailerLink,
      data.posterImageUrl,
      data.createdAt,
      data.updatedAt,
      data.genres,
      data.reviews,
    );
  }
}
