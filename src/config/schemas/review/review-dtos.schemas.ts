import { z } from 'zod';

import { CreateReviewDto, ReviewIdDto, UpdateReviewDto } from '../../../domain';
import { idSchema } from '../..';

const baseReviewDtoSchema = z.object({
  user_id: z.lazy(() => idSchema),
  movie_id: z.lazy(() => idSchema),
  rating: z.number().min(1).max(5).int().nullable().optional(),
  comment: z.string().min(5).nullable().optional(),
});

export const createReviewSchema: z.ZodType<CreateReviewDto> = baseReviewDtoSchema;

export const reviewIdSchema: z.ZodType<ReviewIdDto> = z.object({
  user_id: z.lazy(() => idSchema),
  movie_id: z.lazy(() => idSchema),
});

export const updateReviewSchema: z.ZodType<UpdateReviewDto> = baseReviewDtoSchema;
