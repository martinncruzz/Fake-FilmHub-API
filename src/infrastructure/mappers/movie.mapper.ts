import { CustomError, MovieEntity } from '../../domain';
import { movieSchema, ZodAdapter } from '..';

export class MovieMapper {
  static movieEntityFromObject(object: Record<string, any>): MovieEntity {
    const { errors, validatedData } = ZodAdapter.validate(movieSchema, object);

    if (errors) throw CustomError.internalServer('Error processing movie data');

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
      reviews,
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
      genres,
      reviews,
    );
  }
}
