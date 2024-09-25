import { ValidationResult } from "../..";
import { updateUserSchema, ZodAdapter } from "../../../config";

export class UpdateUserDto {
  private constructor(
    public readonly user_id: number,
    public readonly fullname?: string,
    public readonly email?: string,
    public readonly password?: string,
    public readonly avatar?: string
  ) {}

  static create(props: Record<string, any>): ValidationResult<UpdateUserDto> {
    const [errors, parsedData] = ZodAdapter.validate(updateUserSchema, props);

    if (errors) return [errors];

    const { user_id, fullname, email, password, avatar } = parsedData!;

    return [
      undefined,
      new UpdateUserDto(user_id, fullname, email, password, avatar),
    ];
  }
}
