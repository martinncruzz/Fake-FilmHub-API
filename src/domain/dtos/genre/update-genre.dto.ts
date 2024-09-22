import { updateGenreSchema, ZodAdapter } from "../../../config";

export class UpdateGenreDto {
  private constructor(
    public readonly genre_id: number,
    public readonly name?: string,
    public readonly image?: string
  ) {}

  static create(
    props: Record<string, any>
  ): [{ field: string; message: string }[]?, UpdateGenreDto?] {
    const [errors, parsedData] = ZodAdapter.validate(updateGenreSchema, props);

    if (errors) return [errors];

    const { genre_id, name, image } = parsedData!;

    return [undefined, new UpdateGenreDto(genre_id, name, image)];
  }
}
