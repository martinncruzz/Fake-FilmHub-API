import { z } from 'zod';

import { Genre } from '../../modules/genres/entities/genre.entity';
import { PartialMovieGenreSchema } from '../../config/schemas/movie.schema';

export const BaseGenreSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date(),
  movies: z.array(z.lazy(() => PartialMovieGenreSchema)).optional(),
});

export const GenreSchema: z.ZodSchema<Genre> = BaseGenreSchema;

export const PartialGenreSchema: z.ZodSchema<Partial<Genre>> = BaseGenreSchema.partial();
