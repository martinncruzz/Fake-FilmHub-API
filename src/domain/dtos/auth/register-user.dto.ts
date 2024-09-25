import { ValidationResult } from "../..";
import { registerUserSchema, ZodAdapter } from "../../../config";

export class RegisterUserDto {
  private constructor(
    public readonly fullname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly avatar: string
  ) {}

  static create(props: Record<string, any>): ValidationResult<RegisterUserDto> {
    const [errors, parsedData] = ZodAdapter.validate(registerUserSchema, props);

    if (errors) return [errors];

    const { fullname, email, password, avatar } = parsedData!;

    return [undefined, new RegisterUserDto(fullname, email, password, avatar)];
  }
}
