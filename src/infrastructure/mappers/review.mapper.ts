import { reviewSchema, ZodAdapter } from '../../config';
import { CustomError, ReviewEntity } from '../../domain';

export class ReviewMapper {
  static reviewEntityFromObject(object: Record<string, any>): ReviewEntity {
    const { errors, validatedData } = ZodAdapter.validate(reviewSchema, object);

    if (errors) throw CustomError.internalServer('Error processing review data');

    const { review_id, rating, comment, user_id, movie_id, user, movie } = validatedData!;

    return new ReviewEntity(review_id, rating, comment, user_id, movie_id, user, movie);
  }
}
