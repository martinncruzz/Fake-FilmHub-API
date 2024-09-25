import { ValidationResult } from "../..";
import { updateMovieSchema, ZodAdapter } from "../../../config";

export class UpdateMovieDto {
  private constructor(
    public readonly movie_id: number,
    public readonly title?: string,
    public readonly description?: string,
    public readonly release_year?: number,
    public readonly director?: string,
    public readonly duration_minutes?: number,
    public readonly trailer_link?: string,
    public readonly poster_image_url?: string,
    public readonly genre_ids?: number[]
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateMovieDto> {
    const [errors, parsedData] = ZodAdapter.validate(updateMovieSchema, {
      ...props,
      genre_ids:
        props.genre_ids !== undefined
          ? Array.isArray(props.genre_ids)
            ? props.genre_ids
            : [props.genre_ids]
          : undefined,
    });

    if (errors) return [errors];

    const {
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genre_ids,
    } = parsedData!;

    return [
      undefined,
      new UpdateMovieDto(
        movie_id,
        title,
        description,
        release_year,
        director,
        duration_minutes,
        trailer_link,
        poster_image_url,
        genre_ids
      ),
    ];
  }
}
