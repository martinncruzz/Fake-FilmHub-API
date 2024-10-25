import { ValidationResult } from '../../../domain';
import { movieFiltersSchema, ZodAdapter } from '../../../config';

export class MovieFiltersDto {
  private constructor(
    public readonly title?: string,
    public readonly release_year?: number,
    public readonly min_release_year?: number,
    public readonly max_release_year?: number,
    public readonly genre_id?: number,
  ) {}

  static create(props: Record<string, any>): ValidationResult<MovieFiltersDto> {
    const { errors, validatedData } = ZodAdapter.validate(movieFiltersSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
