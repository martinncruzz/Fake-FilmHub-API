export abstract class MovieGenresRepository {
  abstract deleteManyByMovieId(movieId: string): Promise<boolean>;
  abstract deleteManyByGenreId(genreId: string): Promise<boolean>;
}
