export class LoginUserDto {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  private static isStringValid(
    value: string,
    minLength: number,
    maxLength: number
  ): boolean {
    return (
      value !== undefined &&
      typeof value === "string" &&
      value.length >= minLength &&
      value.length <= maxLength
    );
  }

  private static isEmailValid(email: string) {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  }

  static create(props: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = props;

    if (
      !LoginUserDto.isStringValid(email, 10, 255) &&
      !LoginUserDto.isEmailValid(email)
    )
      return ["Missing email or invalid email"];

    if (!LoginUserDto.isStringValid(password, 5, 255))
      return ["Missing password or invalid password"];

    return [undefined, new LoginUserDto(email, password)];
  }
}
