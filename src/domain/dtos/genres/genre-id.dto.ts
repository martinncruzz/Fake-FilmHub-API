export class GenreIdDto {
  private constructor(public readonly genre_id: number) {}

  static get(props: { [key: string]: any }): [string?, GenreIdDto?] {
    const { genre_id } = props;

    if (!genre_id) return ["Missing genre id"];

    if (isNaN(genre_id) || genre_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new GenreIdDto(genre_id)];
  }
}
