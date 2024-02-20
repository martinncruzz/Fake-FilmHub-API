export class CheckUserEmailDto {
  private constructor(public readonly email: string) {}

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

  static create(props: { [key: string]: any }): [string?, CheckUserEmailDto?] {
    const { email } = props;

    if (
      !CheckUserEmailDto.isStringValid(email, 10, 255) &&
      !CheckUserEmailDto.isEmailValid(email)
    )
      return ["Missing email or invalid email"];

    return [undefined, new CheckUserEmailDto(email)];
  }
}
