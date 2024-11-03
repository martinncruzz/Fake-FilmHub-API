import { Router } from 'express';

import { MovieRepositoryImpl } from '../../infrastructure';
import { MovieController } from '..';

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();

    const movieRepository = MovieRepositoryImpl.instance;

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
