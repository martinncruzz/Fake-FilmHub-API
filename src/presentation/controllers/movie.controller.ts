import { Request, Response } from 'express';

import { MovieRepository } from '../../domain';
import {
  CreateMovieDto,
  CreateMovieUseCaseImpl,
  DeleteMovieUseCaseImpl,
  GetMovieByIdUseCaseImpl,
  GetMoviesUseCaseImpl,
  GetReviewsByMovieUseCaseImpl,
  MovieFiltersDto,
  MovieIdDto,
  PaginationDto,
  UpdateMovieDto,
  UpdateMovieUseCaseImpl,
} from '../../application';
import { ErrorHandlerService } from '..';

export class MovieController {
  constructor(private readonly movieRepository: MovieRepository) {}

  getMovies = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const { errors: paginationErrors, validatedData: paginationDto } = PaginationDto.create(+page, +limit);
    if (paginationErrors) return res.status(400).json({ errors: paginationErrors });

    const { errors: movieFiltersErrors, validatedData: movieFiltersDto } = MovieFiltersDto.create(req.query);
    if (movieFiltersErrors) return res.status(400).json({ errors: movieFiltersErrors });

    new GetMoviesUseCaseImpl(this.movieRepository)
      .execute(paginationDto!, movieFiltersDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getMovieById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = MovieIdDto.create({ movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetMovieByIdUseCaseImpl(this.movieRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getReviewsByMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const { errors, validatedData } = MovieIdDto.create({ movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    const { errors: paginationErrors, validatedData: paginationDto } = PaginationDto.create(+page, +limit);
    if (paginationErrors) return res.status(400).json({ errors: paginationErrors });

    new GetReviewsByMovieUseCaseImpl(this.movieRepository)
      .execute(validatedData!, paginationDto!)
      .then((data: any) => res.json(data))
      .catch((error: unknown) => ErrorHandlerService.handleError(error, res));
  };

  createMovie = async (req: Request, res: Response) => {
    const { errors, validatedData } = CreateMovieDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new CreateMovieUseCaseImpl(this.movieRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = UpdateMovieDto.create({ ...req.body, movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    new UpdateMovieUseCaseImpl(this.movieRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = MovieIdDto.create({ movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    new DeleteMovieUseCaseImpl(this.movieRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
