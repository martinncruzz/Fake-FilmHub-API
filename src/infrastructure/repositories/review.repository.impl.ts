import { ReviewEntity, ReviewsData, ReviewRepository, UserEntity, ReviewDatasource } from '../../domain';
import { CreateReviewDto, PaginationDto, ReviewIdDto, UpdateReviewDto } from '../../application';

export class ReviewRepositoryImpl implements ReviewRepository {
  constructor(private readonly reviewDatasource: ReviewDatasource) {}

  getReviews(paginationDto: PaginationDto): Promise<ReviewsData> {
    return this.reviewDatasource.getReviews(paginationDto);
  }

  getReviewById(reviewIdDto: ReviewIdDto): Promise<ReviewEntity> {
    return this.reviewDatasource.getReviewById(reviewIdDto);
  }

  createReview(createReviewDto: CreateReviewDto, user: UserEntity): Promise<ReviewEntity> {
    return this.reviewDatasource.createReview(createReviewDto, user);
  }

  updateReview(updateReviewDto: UpdateReviewDto, user: UserEntity): Promise<ReviewEntity> {
    return this.reviewDatasource.updateReview(updateReviewDto, user);
  }

  deleteReview(reviewIdDto: ReviewIdDto, user: UserEntity): Promise<boolean> {
    return this.reviewDatasource.deleteReview(reviewIdDto, user);
  }
}
