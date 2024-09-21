import { Request, Response } from "express";

import { ErrorHandlerService } from "..";
import {
  CreateGenreDto,
  GenreIdDto,
  UpdateGenreDto,
  PaginationDto,
  GenreRepository,
  GetGenresUseCaseImpl,
  CreateGenreUseCaseImpl,
  DeleteGenreUseCaseImpl,
  GetGenreByIdUseCaseImpl,
  GetMoviesByGenreUseCaseImpl,
  UpdateGenreUseCaseImpl,
} from "../../domain";

export class GenreController {
  constructor(private readonly genreRepository: GenreRepository) {}

  getGenres = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });

    new GetGenresUseCaseImpl(this.genreRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getMoviesByGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });
    if (error) return res.status(400).json({ error });

    new GetMoviesByGenreUseCaseImpl(this.genreRepository)
      .execute(genreIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getGenreById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });
    if (error) return res.status(400).json({ error });

    new GetGenreByIdUseCaseImpl(this.genreRepository)
      .execute(genreIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createGenre = async (req: Request, res: Response) => {
    const [error, createGenreDto] = CreateGenreDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateGenreUseCaseImpl(this.genreRepository)
      .execute(createGenreDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateGenreDto] = UpdateGenreDto.update({
      ...req.body,
      genre_id: +id,
    });
    if (error) return res.status(400).json({ error });

    new UpdateGenreUseCaseImpl(this.genreRepository)
      .execute(updateGenreDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, genreIdDto] = GenreIdDto.get({ genre_id: +id });
    if (error) return res.status(400).json({ error });

    new DeleteGenreUseCaseImpl(this.genreRepository)
      .execute(genreIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
