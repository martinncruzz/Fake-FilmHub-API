import { MovieMapper } from "..";
import { CustomError, GenreEntity } from "../../domain";

export class GenreMapper {
  static genreEntityFromObject(object: Record<string, any>): GenreEntity {
    const { genre_id, name, image, movies } = object;

    if (!genre_id) throw CustomError.badRequest("Missing genre_id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!image) throw CustomError.badRequest("Missing image");
    if (movies && !Array.isArray(movies))
      throw CustomError.badRequest("Movies should be an array of movies");

    return new GenreEntity(
      genre_id,
      name,
      image,
      movies ? movies.map(MovieMapper.movieEntityFromObject) : undefined
    );
  }
}
