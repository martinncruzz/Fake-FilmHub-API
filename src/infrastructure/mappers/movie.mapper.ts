import { GenreMapper } from "..";
import { movieSchema, ZodAdapter } from "../../config";
import { CustomError, MovieEntity } from "../../domain";

export class MovieMapper {
  static movieEntityFromObject(object: Record<string, any>): MovieEntity {
    const { errors, validatedData } = ZodAdapter.validate(movieSchema, object);

    if (errors) throw CustomError.internalServer("Error processing movie data");

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
    } = validatedData!;

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
