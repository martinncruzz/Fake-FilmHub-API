import { Request, Response } from "express";

import { ErrorHandlerService, MovieService } from "..";
import {
  CreateMovieDto,
  MovieIdDto,
  UpdateMovieDto,
  PaginationDto,
  MovieFiltersDto,
} from "../../domain";

export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  getMovies = async (req: Request, res: Response) => {
    const {
      page = 1,
      limit = 10,
      title,
      release_year,
      min_release_year,
      max_release_year,
      genre_id,
    } = req.query;

    const [paginationError, paginationDto] = PaginationDto.create(
      +page,
      +limit
    );

    if (paginationError) return res.status(400).json({ paginationError });

    const [movieFiltersError, movieFiltersDto] = MovieFiltersDto.create({
      title,
      release_year,
      min_release_year,
      max_release_year,
      genre_id,
    });

    if (movieFiltersError) return res.status(400).json({ movieFiltersError });

    this.movieService
      .getMovies(paginationDto!, movieFiltersDto!)
      .then((movies) => res.status(200).json(movies))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getMovieById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, movieIdDto] = MovieIdDto.get({ movie_id: +id });

    if (error) return res.status(400).json({ error });

    this.movieService
      .getMovieById(movieIdDto!)
      .then((movieFound) => res.status(200).json(movieFound))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createMovie = async (req: Request, res: Response) => {
    const [error, createMovieDto] = CreateMovieDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.movieService
      .createMovie(createMovieDto!)
      .then((newMovie) => res.status(200).json(newMovie))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateMovieDto] = UpdateMovieDto.update({
      ...req.body,
      movie_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.movieService
      .updateMovie(updateMovieDto!)
      .then((updatedMovie) => res.status(200).json(updatedMovie))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, movieIdDto] = MovieIdDto.get({
      movie_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.movieService
      .deleteMovie(movieIdDto!)
      .then((deletedMovie) => res.status(200).json(deletedMovie))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
