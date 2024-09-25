import { ValidationResult } from "../..";
import { checkUserEmailSchema, ZodAdapter } from "../../../config";

export class CheckUserEmailDto {
  private constructor(public readonly email: string) {}

  static create(
    props: Record<string, any>
  ): ValidationResult<CheckUserEmailDto> {
    const { errors, validatedData } = ZodAdapter.validate(
      checkUserEmailSchema,
      props
    );

    return errors ? { errors } : { validatedData };
  }
}
