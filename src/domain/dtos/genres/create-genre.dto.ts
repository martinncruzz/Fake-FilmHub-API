export class CreateGenreDto {
  private constructor(public readonly name: string) {}

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

  static create(props: { [key: string]: any }): [string?, CreateGenreDto?] {
    const { name } = props;

    if (!CreateGenreDto.isStringValid(name, 2, 50))
      return ["Missing name or invalid name"];

    return [undefined, new CreateGenreDto(name)];
  }
}
