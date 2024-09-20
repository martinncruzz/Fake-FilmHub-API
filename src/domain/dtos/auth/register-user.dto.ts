export class RegisterUserDto {
  private constructor(
    public readonly fullname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly avatar: string
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

  static create(props: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { fullname, email, password, avatar } = props;

    if (!RegisterUserDto.isStringValid(fullname, 5, 100))
      return ["Missing fullname or invalid fullname"];

    if (
      !RegisterUserDto.isStringValid(email, 10, 255) &&
      !RegisterUserDto.isEmailValid(email)
    )
      return ["Missing email or invalid email"];

    if (!RegisterUserDto.isStringValid(password, 5, 255))
      return ["Missing password or invalid password"];

    if (!RegisterUserDto.isStringValid(avatar, 5, 255))
      return ["Missing avatar or invalid avatar"];

    return [undefined, new RegisterUserDto(fullname, email, password, avatar)];
  }
}
