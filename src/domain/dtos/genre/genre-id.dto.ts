import { genreIdSchema, ZodAdapter } from "../../../config";

export class GenreIdDto {
  private constructor(public readonly genre_id: number) {}

  static create(
    props: Record<string, any>
  ): [{ field: string; message: string }[]?, GenreIdDto?] {
    const [errors, parsedData] = ZodAdapter.validate(genreIdSchema, props);

    if (errors) return [errors];

    const { genre_id } = parsedData!;

    return [undefined, new GenreIdDto(genre_id)];
  }
}
