import { ValidationResult } from '../..';
import { updateReviewSchema, ZodAdapter } from '../../../config';

export class UpdateReviewDto {
  private constructor(
    public review_id: number,
    public rating?: number | null,
    public comment?: string | null,
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateReviewDto> {
    if (!props?.rating && !props?.comment) {
      return {
        errors: [{ field: 'rating or comment', message: 'At least one of rating or comment must be provided.' }],
      };
    }

    const { errors, validatedData } = ZodAdapter.validate(updateReviewSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
