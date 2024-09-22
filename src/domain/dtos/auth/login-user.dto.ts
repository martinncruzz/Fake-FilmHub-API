import { loginUserSchema, ZodAdapter } from "../../../config";

export class LoginUserDto {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(
    props: Record<string, any>
  ): [{ field: string; message: string }[]?, LoginUserDto?] {
    const [errors, parsedData] = ZodAdapter.validate(loginUserSchema, props);

    if (errors) return [errors];

    const { email, password } = parsedData!;

    return [undefined, new LoginUserDto(email, password)];
  }
}
