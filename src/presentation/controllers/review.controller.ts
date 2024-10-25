import { Request, Response } from 'express';

import { ReviewRepository } from '../../domain';
import {
  CreateReviewDto,
  CreateReviewUseCaseImpl,
  DeleteReviewUseCaseImpl,
  GetReviewByIdUseCaseImpl,
  GetReviewsUseCaseImpl,
  PaginationDto,
  ReviewIdDto,
  UpdateReviewDto,
  UpdateReviewUseCaseImpl,
} from '../../application';
import { ErrorHandlerService } from '..';

export class ReviewController {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  getReviews = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const { errors: paginationErrors, validatedData: paginationDto } = PaginationDto.create(+page, +limit);
    if (paginationErrors) return res.status(400).json({ errors: paginationErrors });

    new GetReviewsUseCaseImpl(this.reviewRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getReviewById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = ReviewIdDto.create({ review_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetReviewByIdUseCaseImpl(this.reviewRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createReview = async (req: Request, res: Response) => {
    const { errors, validatedData } = CreateReviewDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new CreateReviewUseCaseImpl(this.reviewRepository)
      .execute(validatedData!, req.body.user)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateReview = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = UpdateReviewDto.create({ ...req.body, review_id: +id });
    if (errors) return res.status(400).json({ errors });

    new UpdateReviewUseCaseImpl(this.reviewRepository)
      .execute(validatedData!, req.body.user)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  deleteReview = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = ReviewIdDto.create({ review_id: +id });
    if (errors) return res.status(400).json({ errors });

    new DeleteReviewUseCaseImpl(this.reviewRepository)
      .execute(validatedData!, req.body.user)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
