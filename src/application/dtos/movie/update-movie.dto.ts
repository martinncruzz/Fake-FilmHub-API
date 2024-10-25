import { ValidationResult } from '../../../domain';
import { updateMovieSchema, ZodAdapter } from '../../../config';

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
    public readonly genre_ids?: number[],
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateMovieDto> {
    const { errors, validatedData } = ZodAdapter.validate(updateMovieSchema, {
      ...props,
      genre_ids:
        props.genre_ids !== undefined
          ? Array.isArray(props.genre_ids) && props.genre_ids.length > 0
            ? props.genre_ids
            : [props.genre_ids]
          : undefined,
    });

    return errors ? { errors } : { validatedData };
  }
}
