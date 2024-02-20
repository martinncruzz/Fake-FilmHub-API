export class CreateGenreDto {
  private constructor(
    public readonly name: string,
    public readonly image: string
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

  static create(props: { [key: string]: any }): [string?, CreateGenreDto?] {
    const { name, image } = props;

    if (!CreateGenreDto.isStringValid(name, 2, 50))
      return ["Missing name or invalid name"];

    if (!CreateGenreDto.isStringValid(image, 5, 255))
      return ["Missing image or invalid image"];

    return [undefined, new CreateGenreDto(name, image)];
  }
}
