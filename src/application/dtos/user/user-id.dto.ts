import { ValidationResult } from '../../../domain';
import { userIdSchema, ZodAdapter } from '../../../config';

export class UserIdDto {
  private constructor(public readonly user_id: number) {}

  static create(props: Record<string, any>): ValidationResult<UserIdDto> {
    const { errors, validatedData } = ZodAdapter.validate(userIdSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
