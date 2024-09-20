export class UpdateGenreDto {
  private constructor(
    public readonly genre_id: number,
    public readonly name?: string,
    public readonly image?: string
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

  static update(props: { [key: string]: any }): [string?, UpdateGenreDto?] {
    const { genre_id, name, image } = props;

    if (!genre_id || !Number.isInteger(genre_id) || genre_id <= 0)
      return ["Missing genre id or invalid genre id"];

    if (!UpdateGenreDto.isStringValid(name, 2, 255))
      return ["Missing name or invalid name"];

    if (!UpdateGenreDto.isStringValid(image, 5, 255))
      return ["Missing image or invalid image"];

    return [undefined, new UpdateGenreDto(genre_id, name, image)];
  }
}
