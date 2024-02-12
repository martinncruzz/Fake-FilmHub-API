export class UpdateGenreDto {
  private constructor(
    public readonly genre_id: number,
    public readonly name?: string
  ) {}

  static update(props: { [key: string]: any }): [string?, UpdateGenreDto?] {
    const { genre_id, name } = props;

    if (!genre_id) return ["Missing genre id"];

    if (isNaN(genre_id) || genre_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new UpdateGenreDto(genre_id, name)];
  }
}
