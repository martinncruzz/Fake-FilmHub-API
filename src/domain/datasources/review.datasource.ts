import { CreateReviewDto, PaginationDto, ReviewIdDto, UpdateReviewDto } from '../../application';
import { ReviewEntity, ReviewsData, UserEntity } from '..';

export abstract class ReviewDatasource {
  abstract getReviews(paginationDto: PaginationDto): Promise<ReviewsData>;
  abstract getReviewById(reviewIdDto: ReviewIdDto): Promise<ReviewEntity>;
  abstract createReview(createReviewDto: CreateReviewDto, user: UserEntity): Promise<ReviewEntity>;
  abstract updateReview(updateReviewDto: UpdateReviewDto, user: UserEntity): Promise<ReviewEntity>;
  abstract deleteReview(reviewIdDto: ReviewIdDto, user: UserEntity): Promise<boolean>;
}
