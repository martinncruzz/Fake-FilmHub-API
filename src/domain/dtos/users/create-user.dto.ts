export class CreateUserDto {
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

  static create(props: { [key: string]: any }): [string?, CreateUserDto?] {
    const { fullname, email, password, avatar } = props;

    if (!CreateUserDto.isStringValid(fullname, 5, 100))
      return ["Missing fullname or invalid fullname"];

    if (
      !CreateUserDto.isStringValid(email, 10, 255) &&
      !CreateUserDto.isEmailValid(email)
    )
      return ["Missing email or invalid email"];

    if (!CreateUserDto.isStringValid(password, 5, 255))
      return ["Missing password or invalid password"];

    if (!CreateUserDto.isStringValid(avatar, 5, 255))
      return ["Missing avatar or invalid avatar"];

    return [undefined, new CreateUserDto(fullname, email, password, avatar)];
  }
}
