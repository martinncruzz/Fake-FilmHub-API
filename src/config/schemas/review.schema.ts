import { z } from 'zod';

import { PartialMovieSchema } from '@config/schemas/movie.schema';
import { PartialUserSchema } from '@config/schemas/user.schema';
import { Review } from '@modules/reviews/entities/review.entity';

export const BaseReviewSchema = z.object({
  id: z.string().uuid(),
  rating: z.number().int().nullable(),
  comment: z.string().nullable(),
  userId: z.string().uuid(),
  movieId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.lazy(() => PartialUserSchema).optional(),
  movie: z.lazy(() => PartialMovieSchema).optional(),
});

export const ReviewSchema: z.ZodSchema<Review> = BaseReviewSchema;

export const PartialReviewSchema: z.ZodSchema<Partial<Review>> = BaseReviewSchema.partial();
