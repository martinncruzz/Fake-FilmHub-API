export class MovieFiltersDto {
  private constructor(
    public readonly title?: string,
    public readonly release_year?: number,
    public readonly min_release_year?: number,
    public readonly max_release_year?: number,
    public readonly genre_id?: number
  ) {}

  private static isStringValid(
    value: string | undefined,
    minLength: number,
    maxLength: number
  ): boolean {
    return (
      value === undefined ||
      (value.length >= minLength && value.length <= maxLength)
    );
  }

  private static isNumberValid(
    value: number | undefined,
    minValue: number,
    maxValue: number
  ): boolean {
    return (
      value === undefined ||
      (Number.isInteger(value) && value >= minValue && value <= maxValue)
    );
  }

  static create(filters: { [key: string]: any }): [string?, MovieFiltersDto?] {
    const {
      title,
      release_year,
      min_release_year,
      max_release_year,
      genre_id,
    } = filters;

    let parsedReleaseYear,
      parsedMinReleaseYear,
      parsedMaxReleaseYear,
      parsedGenreId = genre_id !== undefined ? +genre_id : undefined;

    if (release_year) {
      parsedReleaseYear = +release_year;
      parsedMinReleaseYear = undefined;
      parsedMaxReleaseYear = undefined;
    } else {
      parsedReleaseYear = undefined;
      parsedMinReleaseYear =
        min_release_year !== undefined ? +min_release_year : undefined;
      parsedMaxReleaseYear =
        max_release_year !== undefined ? +max_release_year : undefined;
    }

    if (!MovieFiltersDto.isStringValid(title, 2, 255)) return ["Invalid title"];

    if (!MovieFiltersDto.isNumberValid(parsedReleaseYear, 1800, 2024))
      return ["Invalid release year"];

    if (!MovieFiltersDto.isNumberValid(parsedMinReleaseYear, 1800, 2024))
      return ["Invalid min release year"];

    if (!MovieFiltersDto.isNumberValid(parsedMaxReleaseYear, 1800, 2024))
      return ["Invalid max release year"];

    if (
      parsedGenreId &&
      (!Number.isInteger(parsedGenreId) || parsedGenreId <= 0)
    )
      return ["Invalid genre id"];

    return [
      undefined,
      new MovieFiltersDto(
        title,
        parsedReleaseYear,
        parsedMinReleaseYear,
        parsedMaxReleaseYear,
        parsedGenreId
      ),
    ];
  }
}
