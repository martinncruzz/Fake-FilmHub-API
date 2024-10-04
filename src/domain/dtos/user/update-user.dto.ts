import { ValidationResult } from '../..';
import { updateUserSchema, ZodAdapter } from '../../../config';

export class UpdateUserDto {
  private constructor(
    public readonly user_id: number,
    public readonly fullname?: string,
    public readonly email?: string,
    public readonly password?: string,
    public readonly avatar?: string,
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateUserDto> {
    const { errors, validatedData } = ZodAdapter.validate(updateUserSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
