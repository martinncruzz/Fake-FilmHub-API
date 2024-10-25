import { ValidationResult } from '../../../domain';
import { reviewIdSchema, ZodAdapter } from '../../../config';

export class ReviewIdDto {
  private constructor(public readonly review_id: number) {}

  static create(props: Record<string, any>): ValidationResult<ReviewIdDto> {
    const { errors, validatedData } = ZodAdapter.validate(reviewIdSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
