import { GenreEntity } from '../..';

export interface GenresData {
  total: number;
  genres: GenreEntity[];
}

export interface GenresWithMovies {
  totalMovies: number;
  genre: GenreEntity;
}
