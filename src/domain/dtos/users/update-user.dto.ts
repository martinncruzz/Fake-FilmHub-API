export class UpdateUserDto {
  private constructor(
    public readonly user_id: number,
    public readonly fullname?: string,
    public readonly email?: string,
    public readonly password?: string,
    public readonly avatar?: string
  ) {}

  private static isStringValid(
    value: string | undefined,
    minLength: number,
    maxLength: number
  ): boolean {
    return (
      value === undefined ||
      (typeof value === "string" &&
        value.length >= minLength &&
        value.length <= maxLength)
    );
  }

  private static isEmailValid(email: string) {
    if (email === undefined) return true;

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  }

  static update(props: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { user_id, fullname, email, password, avatar } = props;

    if (!user_id || !Number.isInteger(user_id) || user_id <= 0)
      return ["Missing user id or invalid user id"];

    if (!UpdateUserDto.isStringValid(fullname, 5, 100))
      return ["Missing fullname or invalid fullname"];

    if (
      !UpdateUserDto.isStringValid(email, 10, 255) ||
      !UpdateUserDto.isEmailValid(email)
    )
      return ["Missing email or invalid email"];

    if (!UpdateUserDto.isStringValid(password, 5, 255))
      return ["Missing password or invalid password"];

    if (!UpdateUserDto.isStringValid(avatar, 5, 255))
      return ["Missing avatar or invalid avatar"];

    return [
      undefined,
      new UpdateUserDto(user_id, fullname, email, password, avatar),
    ];
  }
}
