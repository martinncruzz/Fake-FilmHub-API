import { CreateReviewDto } from '../../../modules/reviews/dtos/create-review.dto';
import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';
import { Review } from '../../../modules/reviews/entities/review.entity';
import { UpdateReviewDto } from '../../../modules/reviews/dtos/update-review.dto';

export abstract class ReviewsRepository {
  abstract findAll(paginationDto: PaginationDto): Promise<{ total: number; reviews: Review[] }>;
  abstract findAllByUserId(userId: string, paginationDto: PaginationDto): Promise<{ total: number; reviews: Review[] }>;
  abstract findAllByMovieId(
    movieId: string,
    paginationDto: PaginationDto,
  ): Promise<{ total: number; reviews: Review[] }>;
  abstract findById(id: string): Promise<Review | null>;
  abstract findByUserIdAndMovieId(userId: string, movieId: string): Promise<Review | null>;
  abstract create(createReviewDto: CreateReviewDto, userId: string): Promise<Review>;
  abstract update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review>;
  abstract delete(id: string): Promise<boolean>;
  abstract deleteManyByMovieId(movieId: string): Promise<boolean>;
}
