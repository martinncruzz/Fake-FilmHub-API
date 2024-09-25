import { ValidationResult } from "../..";
import { createMovieSchema, ZodAdapter } from "../../../config";

export class CreateMovieDto {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly release_year: number,
    public readonly director: string,
    public readonly duration_minutes: number,
    public readonly trailer_link: string,
    public readonly poster_image_url: string,
    public readonly genre_ids: number[]
  ) {}

  static create(props: Record<string, any>): ValidationResult<CreateMovieDto> {
    const [errors, parsedData] = ZodAdapter.validate(createMovieSchema, {
      ...props,
      genre_ids: Array.isArray(props.genre_ids)
        ? props.genre_ids
        : [props.genre_ids],
    });

    if (errors) return [errors];

    const {
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
      new CreateMovieDto(
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
