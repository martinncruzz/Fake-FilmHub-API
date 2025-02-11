import { InternalServerErrorException } from '@nestjs/common';

import { Movie } from '@modules/movies/entities/movie.entity';
import { ReviewSchema } from '@config/schemas/review.schema';
import { User } from '@modules/users/entities/user.entity';
import { ValidatorAdapter } from '@config/adapters/validator.adapter';

export class Review {
  constructor(
    public readonly id: string,
    public readonly rating: number | null,
    public readonly comment: string | null,
    public readonly userId: string,
    public readonly movieId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly user?: Partial<User>,
    public readonly movie?: Partial<Movie>,
  ) {}

  static fromObject(object: Record<string, any>): Review {
    const { success, data } = ValidatorAdapter.validate(object, ReviewSchema);

    if (!success) throw new InternalServerErrorException('Error processing review data');

    return new Review(
      data.id,
      data.rating,
      data.comment,
      data.userId,
      data.movieId,
      data.createdAt,
      data.updatedAt,
      data.user,
      data.movie,
    );
  }
}
