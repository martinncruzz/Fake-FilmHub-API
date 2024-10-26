import { MovieEntity } from '../..';

export interface MoviesData {
  total: number;
  movies: MovieEntity[];
}

export interface MovieWithReviews {
  totalReviews: number;
  movie: MovieEntity;
}
