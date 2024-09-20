export class GenreIdDto {
  private constructor(public readonly genre_id: number) {}

  static get(props: { [key: string]: any }): [string?, GenreIdDto?] {
    const { genre_id } = props;

    if (!genre_id || !Number.isInteger(genre_id) || genre_id <= 0)
      return ["Missing genre id or invalid genre id"];

    return [undefined, new GenreIdDto(genre_id)];
  }
}
