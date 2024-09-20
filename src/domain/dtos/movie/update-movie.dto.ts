export class UpdateMovieDto {
  private constructor(
    public readonly movie_id: number,
    public readonly title?: string,
    public readonly description?: string,
    public readonly release_year?: number,
    public readonly director?: string,
    public readonly duration_minutes?: number,
    public readonly trailer_link?: string,
    public readonly poster_image_url?: string,
    public readonly genre_ids?: number[]
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

  private static isNumberValid(
    value: number,
    minValue: number,
    maxValue: number
  ): boolean {
    return (
      value === undefined ||
      (Number.isInteger(value) && value >= minValue && value <= maxValue)
    );
  }

  private static normalizedIds(genreIds: number[]) {
    if (genreIds !== undefined) {
      if (!genreIds || genreIds.length === 0) return false;

      let validatedGenreIds: number[];

      Array.isArray(genreIds)
        ? (validatedGenreIds = genreIds)
        : (validatedGenreIds = [genreIds]);

      if (!validatedGenreIds.every((id) => Number.isInteger(id) && id > 0))
        return false;

      return validatedGenreIds;
    }
  }

  static update(props: { [key: string]: any }): [string?, UpdateMovieDto?] {
    const {
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genre_ids,
    } = props;

    if (!movie_id || !Number.isInteger(movie_id) || movie_id <= 0)
      return ["Missing movie id or invalid movie id"];

    if (!UpdateMovieDto.isStringValid(title, 2, 255))
      return ["Missing title or invalid title"];

    if (!UpdateMovieDto.isStringValid(description, 10, 1000))
      return ["Missing description or invalid description"];

    if (!UpdateMovieDto.isNumberValid(release_year, 1800, 2024))
      return ["Missing release year or invalid release year"];

    if (!UpdateMovieDto.isStringValid(director, 2, 100))
      return ["Missing director or invalid director"];

    if (!UpdateMovieDto.isNumberValid(duration_minutes, 30, 720))
      return ["Missing duration minutes or invalid duration minutes"];

    if (!UpdateMovieDto.isStringValid(trailer_link, 5, 255))
      return ["Missing trailer link or invalid trailer link"];

    if (!UpdateMovieDto.isStringValid(poster_image_url, 5, 255))
      return ["Missing poster image url or invalid poster image url"];

    const validatedGenreIds = UpdateMovieDto.normalizedIds(genre_ids);

    if (validatedGenreIds === false)
      return ["Missing genre ids or invalid genre ids"];

    return [
      undefined,
      new UpdateMovieDto(
        movie_id,
        title,
        description,
        release_year,
        director,
        duration_minutes,
        trailer_link,
        poster_image_url,
        validatedGenreIds
      ),
    ];
  }
}
