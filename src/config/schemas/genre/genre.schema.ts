import { z } from "zod";

import { GenreEntity } from "../../../domain";
import { movieSchema } from "../..";

export const genreSchema: z.ZodType<GenreEntity> = z.object({
  genre_id: z.number().positive().int(),
  name: z.string().min(2),
  image: z.string().url(),
  movies: z.array(z.lazy(() => movieSchema)).optional(),
});
