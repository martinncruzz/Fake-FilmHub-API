import { z } from "zod";

import { CreateMovieDto, MovieIdDto, UpdateMovieDto } from "../../../domain";

export const createMovieSchema: z.ZodType<CreateMovieDto> = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  release_year: z.number().int().min(1900).max(2024),
  director: z.string().min(2),
  duration_minutes: z.number().int().min(30).max(720),
  trailer_link: z.string().url(),
  poster_image_url: z.string().url(),
  genre_ids: z.array(z.number().positive().int()),
});

export const movieIdSchema: z.ZodType<MovieIdDto> = z.object({
  movie_id: z.number().positive().int(),
});

export const updateMovieSchema: z.ZodType<UpdateMovieDto> = z.object({
  movie_id: z.number().positive().int(),
  title: z.string().min(2).optional(),
  description: z.string().min(10).optional(),
  release_year: z.number().int().min(1900).max(2024).optional(),
  director: z.string().min(2).optional(),
  duration_minutes: z.number().int().min(30).max(720).optional(),
  trailer_link: z.string().url().optional(),
  poster_image_url: z.string().url().optional(),
  genre_ids: z.array(z.number().positive().int()).optional(),
});
