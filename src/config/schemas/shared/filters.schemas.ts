import { z } from 'zod';

import { MovieFiltersDto } from '../../../domain';

export const movieFiltersSchema: z.ZodType<MovieFiltersDto> = z.object({
  title: z.string().min(2).optional(),
  release_year: z.coerce.number().int().min(1900).max(2024).optional(),
  min_release_year: z.coerce.number().int().min(1900).max(2024).optional(),
  max_release_year: z.coerce.number().int().min(1900).max(2024).optional(),
  genre_id: z.coerce.number().positive().int().optional(),
});
