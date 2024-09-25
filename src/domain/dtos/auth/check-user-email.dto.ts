import { ValidationResult } from "../..";
import { checkUserEmailSchema, ZodAdapter } from "../../../config";

export class CheckUserEmailDto {
  private constructor(public readonly email: string) {}

  static create(
    props: Record<string, any>
  ): ValidationResult<CheckUserEmailDto> {
    const [errors, parsedData] = ZodAdapter.validate(
      checkUserEmailSchema,
      props
    );

    if (errors) return [errors];

    const { email } = parsedData!;

    return [undefined, new CheckUserEmailDto(email)];
  }
}
