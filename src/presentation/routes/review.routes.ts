import { Router } from 'express';

import { ReviewRepositoryImpl } from '../../infrastructure';
import { AuthMiddleware, ReviewController } from '..';

export class ReviewRoutes {
  static get routes(): Router {
    const router = Router();

    const reviewRepository = ReviewRepositoryImpl.instance;

    const reviewController = new ReviewController(reviewRepository);

    router.get('/', reviewController.getReviews);
    router.get('/:id', reviewController.getReviewById);
    router.post('/', [AuthMiddleware.validateJWT], reviewController.createReview);
    router.put('/:id', [AuthMiddleware.validateJWT], reviewController.updateReview);
    router.delete('/:id', [AuthMiddleware.validateJWT], reviewController.deleteReview);

    return router;
  }
}
