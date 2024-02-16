export class MovieIdDto {
  private constructor(public readonly movie_id: number) {}

  static get(props: { [key: string]: any }): [string?, MovieIdDto?] {
    const { movie_id } = props;

    if (!movie_id || !Number.isInteger(movie_id) || movie_id <= 0)
      return ["Missing movie id or invalid movie id"];

    return [undefined, new MovieIdDto(movie_id)];
  }
}
