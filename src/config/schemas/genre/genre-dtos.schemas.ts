import { z } from 'zod';

import { CreateGenreDto, GenreIdDto, UpdateGenreDto } from '../../../domain';
import { idSchema } from '../..';

export const createGenreSchema: z.ZodType<CreateGenreDto> = z.object({
  name: z.string().min(2),
  image: z.string().url(),
});

export const genreIdSchema: z.ZodType<GenreIdDto> = z.object({
  genre_id: z.lazy(() => idSchema),
});

export const updateGenreSchema: z.ZodType<UpdateGenreDto> = z.object({
  genre_id: z.lazy(() => idSchema),
  name: z.string().min(2).optional(),
  image: z.string().url().optional(),
});
