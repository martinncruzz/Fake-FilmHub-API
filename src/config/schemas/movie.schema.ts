import { z } from 'zod';

import { Movie } from '../../modules/movies/entities/movie.entity';
import { MovieGenre } from '../../modules/movies/entities/movie-genre.entity';
import { PartialGenreSchema } from '../../config/schemas/genre.schema';
import { PartialReviewSchema } from '../../config/schemas/review.schema';

const BaseMovieGenreSchema = z.object({
  id: z.string().uuid(),
  movieId: z.string().uuid(),
  genreId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  movie: z.lazy(() => PartialMovieSchema).optional(),
  genre: z.lazy(() => PartialGenreSchema).optional(),
});

export const MovieGenreSchema: z.ZodSchema<MovieGenre> = BaseMovieGenreSchema;

export const PartialMovieGenreSchema: z.ZodSchema<Partial<MovieGenre>> = BaseMovieGenreSchema.partial();

const BaseMovieSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  releaseYear: z.number().int(),
  director: z.string(),
  durationMinutes: z.number().int(),
  trailerLink: z.string().url(),
  posterImageUrl: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date(),
  genres: z.array(z.lazy(() => PartialMovieGenreSchema)).optional(),
  reviews: z.array(z.lazy(() => PartialReviewSchema)).optional(),
});

export const MovieSchema: z.ZodSchema<Movie> = BaseMovieSchema;

export const PartialMovieSchema: z.ZodSchema<Partial<Movie>> = BaseMovieSchema.partial();
