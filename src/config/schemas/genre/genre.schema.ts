import { z } from 'zod';

import { GenreEntity, PartialGenreEntity } from '../../../domain';
import { partialMovieSchema } from '../..';

const baseGenreSchema = z.object({
  genre_id: z.number().positive().int(),
  name: z.string().min(2),
  image: z.string().url(),
  movies: z.array(z.lazy(() => partialMovieSchema)).optional(),
});

export const genreSchema: z.ZodType<GenreEntity> = baseGenreSchema;

export const partialGenreSchema: z.ZodType<PartialGenreEntity> = baseGenreSchema.partial();
