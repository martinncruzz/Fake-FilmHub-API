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

    const { errors: paginationErrors, validatedData: paginationDto } =
      PaginationDto.create(+page, +limit);

    if (paginationErrors)
      return res.status(400).json({ errors: paginationErrors });

    new GetGenresUseCaseImpl(this.genreRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getMoviesByGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = GenreIdDto.create({ genre_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetMoviesByGenreUseCaseImpl(this.genreRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getGenreById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = GenreIdDto.create({ genre_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetGenreByIdUseCaseImpl(this.genreRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createGenre = async (req: Request, res: Response) => {
    const { errors, validatedData } = CreateGenreDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new CreateGenreUseCaseImpl(this.genreRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = UpdateGenreDto.create({
      ...req.body,
      genre_id: +id,
    });
    if (errors) return res.status(400).json({ errors });

    new UpdateGenreUseCaseImpl(this.genreRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteGenre = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = GenreIdDto.create({ genre_id: +id });
    if (errors) return res.status(400).json({ errors });

    new DeleteGenreUseCaseImpl(this.genreRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
