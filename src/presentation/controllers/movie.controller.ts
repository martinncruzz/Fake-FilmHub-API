import { Request, Response } from "express";
import {
  CreateMovieDto,
  MovieIdDto,
  UpdateMovieDto,
  CustomError,
} from "../../domain";
import { MovieService } from "../services";

export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json({ error: error.message });

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getMovies = async (req: Request, res: Response) => {
    this.movieService
      .getMovies()
      .then((movies) => res.status(200).json(movies))
      .catch((error) => this.handleError(error, res));
  };

  getMovieById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, movieIdDto] = MovieIdDto.get({ movie_id: +id });

    if (error) return res.status(400).json({ error });

    this.movieService
      .getMovieById(movieIdDto!)
      .then((movieFound) => res.status(200).json(movieFound))
      .catch((error) => this.handleError(error, res));
  };

  createMovie = async (req: Request, res: Response) => {
    const [error, createMovieDto] = CreateMovieDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.movieService
      .createMovie(createMovieDto!)
      .then((newMovie) => res.status(200).json(newMovie))
      .catch((error) => this.handleError(error, res));
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
      .catch((error) => this.handleError(error, res));
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
      .catch((error) => this.handleError(error, res));
  };
}
