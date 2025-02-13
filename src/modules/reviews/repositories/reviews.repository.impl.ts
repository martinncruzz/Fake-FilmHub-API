import { Injectable } from '@nestjs/common';

import { CreateReviewDto } from '../../../modules/reviews/dtos/create-review.dto';
import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';
import { PostgresDatabase } from '../../../database/postgres/postgres-database';
import { Review } from '../../../modules/reviews/entities/review.entity';
import { ReviewsRepository } from '../../../modules/reviews/repositories/reviews.repository';
import { UpdateReviewDto } from '../../../modules/reviews/dtos/update-review.dto';

@Injectable()
export class ReviewsRepositoryImpl implements ReviewsRepository {
  private readonly prisma = PostgresDatabase.getClient();

  async findAll(paginationDto: PaginationDto): Promise<{ total: number; reviews: Review[] }> {
    const { page, limit } = paginationDto;

    const [total, reviews] = await this.prisma.$transaction([
      this.prisma.review.count(),
      this.prisma.review.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: { select: { fullname: true, email: true, avatarUrl: true } },
          movie: { select: { title: true, releaseYear: true, director: true, posterImageUrl: true } },
        },
      }),
    ]);

    return { total, reviews: reviews.map(Review.fromObject) };
  }

  async findAllByUserId(userId: string, paginationDto: PaginationDto): Promise<{ total: number; reviews: Review[] }> {
    const { page, limit } = paginationDto;

    const [total, reviews] = await this.prisma.$transaction([
      this.prisma.review.count({ where: { userId } }),
      this.prisma.review.findMany({
        where: { userId },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: { select: { fullname: true, email: true, avatarUrl: true } },
          movie: { select: { title: true, releaseYear: true, director: true, posterImageUrl: true } },
        },
      }),
    ]);

    return { total, reviews: reviews.map(Review.fromObject) };
  }

  async findAllByMovieId(movieId: string, paginationDto: PaginationDto): Promise<{ total: number; reviews: Review[] }> {
    const { page, limit } = paginationDto;

    const [total, reviews] = await this.prisma.$transaction([
      this.prisma.review.count({ where: { movieId } }),
      this.prisma.review.findMany({
        where: { movieId },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: { select: { fullname: true, email: true, avatarUrl: true } },
          movie: { select: { title: true, releaseYear: true, director: true, posterImageUrl: true } },
        },
      }),
    ]);

    return { total, reviews: reviews.map(Review.fromObject) };
  }

  async findById(id: string): Promise<Review | null> {
    const review = await this.prisma.review.findUnique({
      where: { id },
      include: {
        user: { select: { fullname: true, email: true, avatarUrl: true } },
        movie: { select: { title: true, releaseYear: true, director: true, posterImageUrl: true } },
      },
    });

    return review ? Review.fromObject(review) : null;
  }

  async findByUserIdAndMovieId(userId: string, movieId: string): Promise<Review | null> {
    const review = await this.prisma.review.findFirst({ where: { userId, movieId } });
    return review ? Review.fromObject(review) : null;
  }

  async create(createReviewDto: CreateReviewDto, userId: string): Promise<Review> {
    const createdReview = await this.prisma.review.create({
      data: { ...createReviewDto, userId },
      include: {
        user: { select: { fullname: true, avatarUrl: true } },
        movie: { select: { title: true, posterImageUrl: true } },
      },
    });

    return Review.fromObject(createdReview);
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const updatedReview = await this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
      include: {
        user: { select: { fullname: true, avatarUrl: true } },
        movie: { select: { title: true, posterImageUrl: true } },
      },
    });

    return Review.fromObject(updatedReview);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.review.delete({ where: { id } });
    return true;
  }

  async deleteManyByMovieId(movieId: string): Promise<boolean> {
    await this.prisma.review.deleteMany({ where: { movieId } });
    return true;
  }
}
