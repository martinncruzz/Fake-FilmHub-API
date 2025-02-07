import {
  BadRequestException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { buildBaseUrl } from '@modules/shared/utils/base-url.builder';
import { buildPagination } from '@modules/shared/utils/pagination.builder';
import { CreateReviewDto } from '@modules/reviews/dtos/create-review.dto';
import { MoviesService } from '@modules/movies/movies.service';
import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { ResourceType, UserRole } from '@modules/shared/interfaces/enums';
import { Review } from '@modules/reviews/entities/review.entity';
import { ReviewsRepository } from '@modules/reviews/repositories/reviews.repository';
import { UpdateReviewDto } from '@modules/reviews/dtos/update-review.dto';
import { User } from '@modules/users/entities/user.entity';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,

    @Inject(forwardRef(() => MoviesService))
    private readonly moviesService: MoviesService,
  ) {}

  async getReviews(
    paginationDto: PaginationDto,
  ): Promise<{ prev: string | null; next: string | null; reviews: Review[] }> {
    const { total, reviews } = await this.reviewsRepository.findAll(paginationDto);

    if (
      reviews.some(
        (review) =>
          !review.user ||
          !review.user.fullname ||
          !review.user.email ||
          !review.user.avatarUrl ||
          !review.movie ||
          !review.movie.title ||
          !review.movie.releaseYear ||
          !review.movie.director ||
          !review.movie.posterImageUrl,
      )
    ) {
      throw new InternalServerErrorException('Reviews data is incomplete');
    }

    const baseUrl = buildBaseUrl(ResourceType.REVIEWS);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return { prev, next, reviews };
  }

  async getReviewsByUserId(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<{ prev: string | null; next: string | null; reviews: Review[] }> {
    const { total, reviews } = await this.reviewsRepository.findAllByUserId(userId, paginationDto);

    if (
      reviews.some(
        (review) =>
          !review.user ||
          !review.user.fullname ||
          !review.user.email ||
          !review.user.avatarUrl ||
          !review.movie ||
          !review.movie.title ||
          !review.movie.releaseYear ||
          !review.movie.director ||
          !review.movie.posterImageUrl,
      )
    ) {
      throw new InternalServerErrorException('Reviews data is incomplete');
    }

    const baseUrl = buildBaseUrl(ResourceType.USERS, `/${userId}/reviews`);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return { prev, next, reviews };
  }

  async getReviewsByMovieId(
    movieId: string,
    paginationDto: PaginationDto,
  ): Promise<{ prev: string | null; next: string | null; reviews: Review[] }> {
    const { total, reviews } = await this.reviewsRepository.findAllByMovieId(movieId, paginationDto);

    if (
      reviews.some(
        (review) =>
          !review.user ||
          !review.user.fullname ||
          !review.user.email ||
          !review.user.avatarUrl ||
          !review.movie ||
          !review.movie.title ||
          !review.movie.releaseYear ||
          !review.movie.director ||
          !review.movie.posterImageUrl,
      )
    ) {
      throw new InternalServerErrorException('Reviews data is incomplete');
    }

    const baseUrl = buildBaseUrl(ResourceType.MOVIES, `/${movieId}/reviews`);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return { prev, next, reviews };
  }

  async getReviewById(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findById(id);

    if (!review) throw new NotFoundException(`Review with id "${id}" not found`);

    if (
      !review.user ||
      !review.user.fullname ||
      !review.user.email ||
      !review.user.avatarUrl ||
      !review.movie ||
      !review.movie.title ||
      !review.movie.releaseYear ||
      !review.movie.director ||
      !review.movie.posterImageUrl
    ) {
      throw new InternalServerErrorException('Review data is incomplete');
    }

    return review;
  }

  async createReview(createReviewDto: CreateReviewDto, userId: string): Promise<Review> {
    const reviewExists = await this.reviewsRepository.findByUserIdAndMovieId(userId, createReviewDto.movieId);
    if (reviewExists) throw new BadRequestException('Review already created');

    await this.moviesService.getMovieById(createReviewDto.movieId);

    const createdReview = await this.reviewsRepository.create(createReviewDto, userId);

    if (
      !createdReview.user ||
      !createdReview.user.fullname ||
      !createdReview.user.avatarUrl ||
      !createdReview.movie ||
      !createdReview.movie.title ||
      !createdReview.movie.posterImageUrl
    ) {
      throw new InternalServerErrorException('Review data is incomplete');
    }

    return createdReview;
  }

  async updateReview(id: string, updateReviewDto: UpdateReviewDto, currentUser: User): Promise<Review> {
    const review = await this.getReviewById(id);

    if (review.userId !== currentUser.id && currentUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('You do not have permission to update this review');
    }

    const updatedReview = await this.reviewsRepository.update(id, updateReviewDto);

    if (
      !updatedReview.user ||
      !updatedReview.user.fullname ||
      !updatedReview.user.avatarUrl ||
      !updatedReview.movie ||
      !updatedReview.movie.title ||
      !updatedReview.movie.posterImageUrl
    ) {
      throw new InternalServerErrorException('Review data is incomplete');
    }

    return updatedReview;
  }

  async deleteReview(id: string, currentUser: User): Promise<boolean> {
    const review = await this.getReviewById(id);

    if (review.userId !== currentUser.id && currentUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('You do not have permission to delete this review');
    }

    return this.reviewsRepository.delete(id);
  }

  async deleteReviewsByMovieId(movieId: string): Promise<boolean> {
    return this.reviewsRepository.deleteManyByMovieId(movieId);
  }
}
