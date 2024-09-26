import { ValidationResult } from "../..";
import { createGenreSchema, ZodAdapter } from "../../../config";

export class CreateGenreDto {
  private constructor(
    public readonly name: string,
    public readonly image: string
  ) {}

  static create(props: Record<string, any>): ValidationResult<CreateGenreDto> {
    const { errors, validatedData } = ZodAdapter.validate(
      createGenreSchema,
      props
    );

    return errors ? { errors } : { validatedData };
  }
}
