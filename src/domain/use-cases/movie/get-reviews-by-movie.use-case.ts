import { MovieIdDto, PaginationDto } from '../../../application';
import { MovieEntity, PaginationResult, PartialReviewEntity } from '../..';

export type GetReviewsByMovieUseCaseResp = Promise<
  Omit<MovieEntity, 'reviews'> & { reviews: PaginationResult & { totalReviews: number; data: PartialReviewEntity[] } }
>;

export interface GetReviewsByMovieUseCase {
  execute(movieIdDto: MovieIdDto, paginationDto: PaginationDto): GetReviewsByMovieUseCaseResp;
}
