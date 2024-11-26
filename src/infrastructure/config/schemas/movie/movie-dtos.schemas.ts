import { z } from 'zod';

import { CreateMovieDto, MovieIdDto, UpdateMovieDto } from '../../../../application';
import { idSchema } from '../../..';

const baseMovieDtoSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  release_year: z.number().int().min(1900).max(2024),
  director: z.string().min(2),
  duration_minutes: z.number().int().min(30).max(720),
  trailer_link: z.string().url(),
  poster_image_url: z.string().url(),
  genre_ids: z.array(z.lazy(() => idSchema)),
});

export const createMovieSchema: z.ZodType<CreateMovieDto> = baseMovieDtoSchema;

export const movieIdSchema: z.ZodType<MovieIdDto> = z.object({ movie_id: z.lazy(() => idSchema) });

export const updateMovieSchema: z.ZodType<UpdateMovieDto> = baseMovieDtoSchema.partial().extend({
  movie_id: z.lazy(() => idSchema),
});
