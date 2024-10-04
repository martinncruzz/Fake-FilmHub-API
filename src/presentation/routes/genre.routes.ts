import { Router } from 'express';

import { GenreController } from '..';
import { GenreDatasourceImpl, GenreRepositoryImpl } from '../../infrastructure';

export class GenreRoutes {
  static get routes(): Router {
    const router = Router();

    const genreDatasource = new GenreDatasourceImpl();
    const genreRepository = new GenreRepositoryImpl(genreDatasource);

    const genreController = new GenreController(genreRepository);

    router.get('/', genreController.getGenres);
    router.get('/:id/movies', genreController.getMoviesByGenre);
    router.get('/:id', genreController.getGenreById);
    router.post('/', genreController.createGenre);
    router.put('/:id', genreController.updateGenre);
    router.delete('/:id', genreController.deleteGenre);

    return router;
  }
}
