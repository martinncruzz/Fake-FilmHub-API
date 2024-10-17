import { Router } from 'express';

import { AuthMiddleware, ReviewController } from '..';
import { ReviewDatasourceImpl, ReviewRepositoryImpl } from '../../infrastructure';

export class ReviewRoutes {
  static get routes(): Router {
    const router = Router();

    const reviewDatasource = new ReviewDatasourceImpl();
    const reviewRepository = new ReviewRepositoryImpl(reviewDatasource);

    const reviewController = new ReviewController(reviewRepository);

    router.get('/', reviewController.getReviews);
    router.get('/:id', reviewController.getReviewById);
    router.post('/', [AuthMiddleware.validateJWT], reviewController.createReview);
    router.put('/:id', [AuthMiddleware.validateJWT], reviewController.updateReview);
    router.delete('/:id', [AuthMiddleware.validateJWT], reviewController.deleteReview);

    return router;
  }
}
