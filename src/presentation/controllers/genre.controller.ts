import { Request, Response } from "express";

import { GenreService } from "..";
import {
  CreateGenreDto,
  GenreIdDto,
  UpdateGenreDto,
  PaginationDto,
  CustomError,
} from "../../domain";

export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json({ error: error.message });

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getGenres = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit);

    if (error) return res.status(400).json({ error });

    this.genreService
      .getGenres(paginationDto!)
      .then((genres) => res.status(200).json(genres))
      .catch((error) => this.handleError(error, res));
  };

  getMoviesByGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });

    if (error) return res.status(400).json({ error });

    this.genreService
      .getMoviesByGenre(genreIdDto!)
      .then((moviesFound) => res.status(200).json(moviesFound))
      .catch((error) => this.handleError(error, res));
  };

  getGenreById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });

    if (error) return res.status(400).json({ error });

    this.genreService
      .getGenreById(genreIdDto!)
      .then((genreFound) => res.status(200).json(genreFound))
      .catch((error) => this.handleError(error, res));
  };

  createGenre = async (req: Request, res: Response) => {
    const [error, createGenreDto] = CreateGenreDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.genreService
      .createGenre(createGenreDto!)
      .then((newGenre) => res.status(200).json(newGenre))
      .catch((error) => this.handleError(error, res));
  };

  updateGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateGenreDto] = UpdateGenreDto.update({
      ...req.body,
      genre_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.genreService
      .updateGenre(updateGenreDto!)
      .then((updatedGenre) => res.status(200).json(updatedGenre))
      .catch((error) => this.handleError(error, res));
  };

  deleteGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });

    if (error) return res.status(400).json({ error });

    this.genreService
      .deleteGenre(genreIdDto!)
      .then((deletedGenre) => res.status(200).json(deletedGenre))
      .catch((error) => this.handleError(error, res));
  };
}
