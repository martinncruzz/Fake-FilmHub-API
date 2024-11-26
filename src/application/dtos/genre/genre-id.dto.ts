import { ValidationResult } from '../../../domain';
import { genreIdSchema, ZodAdapter } from '../../../infrastructure';

export class GenreIdDto {
  private constructor(public readonly genre_id: number) {}

  static create(props: Record<string, any>): ValidationResult<GenreIdDto> {
    const { errors, validatedData } = ZodAdapter.validate(genreIdSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
