export class CreateMovieDto {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly release_year: number,
    public readonly director: string,
    public readonly duration_minutes: number,
    public readonly trailer_link: string,
    public readonly poster_image_url: string,
    public readonly genre_ids: number[]
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

  private static isNumberValid(
    value: number,
    minValue: number,
    maxValue: number
  ): boolean {
    return (
      value !== undefined &&
      Number.isInteger(value) &&
      value >= minValue &&
      value <= maxValue
    );
  }

  private static normalizedIds(genreIds: number[]) {
    if (genreIds === undefined || !genreIds || genreIds.length === 0)
      return false;

    let validatedGenreIds: number[];

    Array.isArray(genreIds)
      ? (validatedGenreIds = genreIds)
      : (validatedGenreIds = [genreIds]);

    if (!validatedGenreIds.every((id) => Number.isInteger(id) && id > 0))
      return false;

    return validatedGenreIds;
  }

  static create(props: { [key: string]: any }): [string?, CreateMovieDto?] {
    const {
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genre_ids,
    } = props;

    if (!CreateMovieDto.isStringValid(title, 2, 255))
      return ["Missing title or invalid title"];

    if (!CreateMovieDto.isStringValid(description, 10, 1000))
      return ["Missing description or invalid description"];

    if (!CreateMovieDto.isNumberValid(release_year, 1800, 2024))
      return ["Missing release year or invalid release year"];

    if (!CreateMovieDto.isStringValid(director, 2, 100))
      return ["Missing director or invalid director"];

    if (!CreateMovieDto.isNumberValid(duration_minutes, 30, 720))
      return ["Missing duration minutes or invalid duration minutes"];

    if (!CreateMovieDto.isStringValid(trailer_link, 5, 255))
      return ["Missing trailer link or invalid trailer link"];

    if (!CreateMovieDto.isStringValid(poster_image_url, 5, 255))
      return ["Missing poster image url or invalid poster image url"];

    const validatedGenreIds = CreateMovieDto.normalizedIds(genre_ids);

    if (validatedGenreIds === false)
      return ["Missing genre ids or invalid genre ids"];

    return [
      undefined,
      new CreateMovieDto(
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
