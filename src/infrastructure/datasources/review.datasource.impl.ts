import { CustomError, ReviewDatasource, ReviewEntity, ReviewsData, UserEntity, UserRole } from '../../domain';
import { CreateReviewDto, PaginationDto, ReviewIdDto, UpdateReviewDto } from '../../application';
import { prisma, ReviewMapper } from '..';

export class ReviewDatasourceImpl implements ReviewDatasource {
  private static _instance: ReviewDatasourceImpl;

  private constructor() {}

  static get instance(): ReviewDatasourceImpl {
    if (!this._instance) this._instance = new ReviewDatasourceImpl();

    return this._instance;
  }

  async getReviews(paginationDto: PaginationDto): Promise<ReviewsData> {
    const { page, limit } = paginationDto;

    const [total, reviews] = await prisma.$transaction([
      prisma.reviewModel.count(),
      prisma.reviewModel.findMany({
        include: {
          user: { select: { fullname: true, email: true, avatar: true } },
          movie: { select: { title: true, release_year: true, director: true, poster_image_url: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      total,
      reviews: reviews.map(ReviewMapper.reviewEntityFromObject),
    };
  }

  async getReviewById(reviewIdDto: ReviewIdDto): Promise<ReviewEntity> {
    const review = await prisma.reviewModel.findUnique({
      where: { review_id: reviewIdDto.review_id },
      include: {
        user: { select: { fullname: true, email: true, avatar: true } },
        movie: { select: { title: true, release_year: true, director: true, poster_image_url: true } },
      },
    });

    if (!review) throw CustomError.notFound('Review not found');

    return ReviewMapper.reviewEntityFromObject(review);
  }

  async createReview(createReviewDto: CreateReviewDto, user: UserEntity): Promise<ReviewEntity> {
    const { movie_id } = createReviewDto;
    const { user_id } = user;

    const movieExists = await prisma.movieModel.findUnique({ where: { movie_id } });
    if (!movieExists) throw CustomError.notFound(`Movie with id "${movie_id}" not found`);

    const existingReview = await prisma.reviewModel.findUnique({ where: { user_id_movie_id: { user_id, movie_id } } });
    if (existingReview) throw CustomError.badRequest('Review already created');

    const newReview = await prisma.reviewModel.create({
      data: { ...createReviewDto, user_id },
      include: {
        user: { select: { fullname: true, avatar: true } },
        movie: { select: { title: true, poster_image_url: true } },
      },
    });

    return ReviewMapper.reviewEntityFromObject(newReview);
  }

  async updateReview(updateReviewDto: UpdateReviewDto, user: UserEntity): Promise<ReviewEntity> {
    const { review_id, ...updateReviewDtoData } = updateReviewDto;
    const { user_id } = user;

    const review = await prisma.reviewModel.findUnique({ where: { review_id } });

    if (!review) throw CustomError.notFound('Review not found');
    if (review.user_id !== user_id) throw CustomError.forbidden('You do not have permission to update this review');

    const updatedReview = await prisma.reviewModel.update({
      where: { review_id },
      data: updateReviewDtoData,
      include: {
        user: { select: { fullname: true, avatar: true } },
        movie: { select: { title: true, poster_image_url: true } },
      },
    });

    return ReviewMapper.reviewEntityFromObject(updatedReview);
  }

  async deleteReview(reviewIdDto: ReviewIdDto, user: UserEntity): Promise<boolean> {
    const { review_id } = reviewIdDto;
    const { user_id, role } = user;

    const review = await prisma.reviewModel.findUnique({ where: { review_id } });

    if (!review) throw CustomError.notFound('Review not found');
    if (review.user_id !== user_id && role !== UserRole.ADMIN)
      throw CustomError.forbidden('You do not have permission to delete this review');

    await prisma.reviewModel.delete({ where: { review_id } });

    return true;
  }
}
