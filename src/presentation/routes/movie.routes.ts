import { Router } from 'express';

import { MovieController } from '..';
import { MovieDatasourceImpl, MovieRepositoryImpl } from '../../infrastructure';

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();

    const movieDatasource = new MovieDatasourceImpl();
    const movieRepository = new MovieRepositoryImpl(movieDatasource);

    const movieController = new MovieController(movieRepository);

    router.get('/', movieController.getMovies);
    router.get('/:id', movieController.getMovieById);
    router.get('/:id/reviews', movieController.getReviewsByMovie);
    router.post('/', movieController.createMovie);
    router.put('/:id', movieController.updateMovie);
    router.delete('/:id', movieController.deleteMovie);

    return router;
  }
}
