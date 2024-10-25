import { z } from 'zod';

import { PartialReviewEntity, ReviewEntity } from '../../../domain';
import { idSchema, partialMovieSchema, partialUserSchema } from '../..';

const baseReviewSchema = z.object({
  review_id: z.lazy(() => idSchema),
  rating: z.number().min(1).max(5).int().nullable(),
  comment: z.string().min(5).nullable(),
  user_id: z.lazy(() => idSchema),
  movie_id: z.lazy(() => idSchema),
  user: z.lazy(() => partialUserSchema).optional(),
  movie: z.lazy(() => partialMovieSchema).optional(),
});

export const reviewSchema: z.ZodType<ReviewEntity> = baseReviewSchema;

export const partialReviewSchema: z.ZodType<PartialReviewEntity> = baseReviewSchema.partial();
