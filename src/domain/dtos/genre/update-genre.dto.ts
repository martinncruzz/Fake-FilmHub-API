import { ValidationResult } from "../..";
import { updateGenreSchema, ZodAdapter } from "../../../config";

export class UpdateGenreDto {
  private constructor(
    public readonly genre_id: number,
    public readonly name?: string,
    public readonly image?: string
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateGenreDto> {
    const { errors, validatedData } = ZodAdapter.validate(
      updateGenreSchema,
      props
    );

    return errors ? { errors } : { validatedData };
  }
}
