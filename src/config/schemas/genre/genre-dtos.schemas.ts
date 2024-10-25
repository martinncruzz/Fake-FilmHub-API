import { z } from 'zod';

import { CreateGenreDto, GenreIdDto, UpdateGenreDto } from '../../../application';
import { idSchema } from '../..';

const baseGenreDtoSchema = z.object({
  name: z.string().min(2),
  image: z.string().url(),
});

export const createGenreSchema: z.ZodType<CreateGenreDto> = baseGenreDtoSchema;

export const genreIdSchema: z.ZodType<GenreIdDto> = z.object({ genre_id: z.lazy(() => idSchema) });

export const updateGenreSchema: z.ZodType<UpdateGenreDto> = baseGenreDtoSchema.partial().extend({
  genre_id: z.lazy(() => idSchema),
});
