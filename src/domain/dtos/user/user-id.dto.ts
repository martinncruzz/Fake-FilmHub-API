import { ValidationResult } from "../..";
import { userIdSchema, ZodAdapter } from "../../../config";

export class UserIdDto {
  private constructor(public readonly user_id: number) {}

  static create(props: Record<string, any>): ValidationResult<UserIdDto> {
    const [errors, parsedData] = ZodAdapter.validate(userIdSchema, props);

    if (errors) return [errors];

    const { user_id } = parsedData!;

    return [undefined, new UserIdDto(user_id)];
  }
}
