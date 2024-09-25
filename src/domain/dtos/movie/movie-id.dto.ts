import { ValidationResult } from "../..";
import { movieIdSchema, ZodAdapter } from "../../../config";

export class MovieIdDto {
  private constructor(public readonly movie_id: number) {}

  static create(props: Record<string, any>): ValidationResult<MovieIdDto> {
    const { errors, validatedData } = ZodAdapter.validate(movieIdSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
