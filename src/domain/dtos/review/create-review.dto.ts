import { ValidationResult } from '../..';
import { createReviewSchema, ZodAdapter } from '../../../config';

export class CreateReviewDto {
  private constructor(
    public movie_id: number,
    public rating?: number | null,
    public comment?: string | null,
  ) {}

  static create(props: Record<string, any>): ValidationResult<CreateReviewDto> {
    if (!props?.rating && !props?.comment) {
      return {
        errors: [{ field: 'rating or comment', message: 'At least one of rating or comment must be provided.' }],
      };
    }

    const { errors, validatedData } = ZodAdapter.validate(createReviewSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
