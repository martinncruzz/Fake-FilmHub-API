import { Request, Response } from "express";

import { ErrorHandlerService } from "..";
import {
  CreateMovieDto,
  MovieIdDto,
  UpdateMovieDto,
  PaginationDto,
  MovieFiltersDto,
  MovieRepository,
  GetMoviesUseCaseImpl,
  GetMovieByIdUseCaseImpl,
  CreateMovieUseCaseImpl,
  UpdateMovieUseCaseImpl,
  DeleteMovieUseCaseImpl,
} from "../../domain";

export class MovieController {
  constructor(private readonly movieRepository: MovieRepository) {}

  getMovies = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [paginationError, paginationDto] = PaginationDto.create(
      +page,
      +limit
    );

    if (paginationError)
      return res.status(400).json({ errors: paginationError });

    const [movieFiltersError, movieFiltersDto] = MovieFiltersDto.create(
      req.query
    );

    if (movieFiltersError)
      return res.status(400).json({ errors: movieFiltersError });

    new GetMoviesUseCaseImpl(this.movieRepository)
      .execute(paginationDto!, movieFiltersDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getMovieById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [errors, movieIdDto] = MovieIdDto.create({ movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetMovieByIdUseCaseImpl(this.movieRepository)
      .execute(movieIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createMovie = async (req: Request, res: Response) => {
    const [errors, createMovieDto] = CreateMovieDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new CreateMovieUseCaseImpl(this.movieRepository)
      .execute(createMovieDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [errors, updateMovieDto] = UpdateMovieDto.create({
      ...req.body,
      movie_id: +id,
    });
    if (errors) return res.status(400).json({ errors });

    new UpdateMovieUseCaseImpl(this.movieRepository)
      .execute(updateMovieDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [errors, movieIdDto] = MovieIdDto.create({ movie_id: +id });
    if (errors) return res.status(400).json({ errors });

    new DeleteMovieUseCaseImpl(this.movieRepository)
      .execute(movieIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
