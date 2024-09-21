import { GenreMapper } from "..";
import { CustomError, MovieEntity } from "../../domain";

export class MovieMapper {
  static movieEntityFromObject(object: Record<string, any>): MovieEntity {
    const {
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genres,
    } = object;

    if (!movie_id) throw CustomError.badRequest("Missing movie_id");
    if (!title) throw CustomError.badRequest("Missing title");
    if (!description) throw CustomError.badRequest("Missing description");
    if (!release_year) throw CustomError.badRequest("Missing release_year");
    if (!director) throw CustomError.badRequest("Missing director");
    if (!duration_minutes)
      throw CustomError.badRequest("Missing duration_minutes");
    if (!trailer_link) throw CustomError.badRequest("Missing trailer_link");
    if (!poster_image_url)
      throw CustomError.badRequest("Missing poster_image_url");
    if (genres && !Array.isArray(genres))
      throw CustomError.badRequest("Genres should be an array of genres");

    return new MovieEntity(
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genres ? genres.map(GenreMapper.genreEntityFromObject) : undefined
    );
  }
}
