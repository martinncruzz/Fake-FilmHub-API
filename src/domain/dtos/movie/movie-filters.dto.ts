import { ValidationResult } from "../..";
import { movieFiltersSchema, ZodAdapter } from "../../../config";

export class MovieFiltersDto {
  private constructor(
    public readonly title?: string,
    public readonly release_year?: number,
    public readonly min_release_year?: number,
    public readonly max_release_year?: number,
    public readonly genre_id?: number
  ) {}

  static create(props: Record<string, any>): ValidationResult<MovieFiltersDto> {
    const [errors, parsedData] = ZodAdapter.validate(movieFiltersSchema, props);

    if (errors) return [errors];

    const {
      title,
      release_year,
      min_release_year,
      max_release_year,
      genre_id,
    } = parsedData!;

    return [
      undefined,
      new MovieFiltersDto(
        title,
        release_year,
        min_release_year,
        max_release_year,
        genre_id
      ),
    ];
  }
}
