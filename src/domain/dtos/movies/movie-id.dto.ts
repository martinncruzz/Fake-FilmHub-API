export class MovieIdDto {
  private constructor(public readonly movie_id: number) {}

  static get(props: { [key: string]: any }): [string?, MovieIdDto?] {
    const { movie_id } = props;

    if (!movie_id) return ["Missing movie id"];

    if (isNaN(movie_id) || movie_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new MovieIdDto(movie_id)];
  }
}
