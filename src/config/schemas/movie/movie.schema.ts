import { z } from 'zod';

import { MovieEntity, PartialMovieEntity } from '../../../domain';
import { idSchema, partialGenreSchema } from '../..';

const baseMovieSchema = z.object({
  movie_id: z.lazy(() => idSchema),
  title: z.string().min(2),
  description: z.string().min(10),
  release_year: z.number().int().min(1900).max(2024),
  director: z.string().min(2),
  duration_minutes: z.number().int().min(30).max(720),
  trailer_link: z.string().url(),
  poster_image_url: z.string().url(),
  genres: z.array(z.lazy(() => partialGenreSchema)).optional(),
});

export const movieSchema: z.ZodType<MovieEntity> = baseMovieSchema;

export const partialMovieSchema: z.ZodType<PartialMovieEntity> = baseMovieSchema.partial();
