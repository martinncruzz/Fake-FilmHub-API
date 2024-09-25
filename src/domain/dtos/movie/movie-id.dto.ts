import { ValidationResult } from "../..";
import { movieIdSchema, ZodAdapter } from "../../../config";

export class MovieIdDto {
  private constructor(public readonly movie_id: number) {}

  static create(props: Record<string, any>): ValidationResult<MovieIdDto> {
    const [errors, parsedData] = ZodAdapter.validate(movieIdSchema, props);

    if (errors) return [errors];

    const { movie_id } = parsedData!;

    return [undefined, new MovieIdDto(movie_id)];
  }
}
