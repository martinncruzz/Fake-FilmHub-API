import { createGenreSchema, ZodAdapter } from "../../../config";

export class CreateGenreDto {
  private constructor(
    public readonly name: string,
    public readonly image: string
  ) {}

  static create(
    props: Record<string, any>
  ): [{ field: string; message: string }[]?, CreateGenreDto?] {
    const [errors, parsedData] = ZodAdapter.validate(createGenreSchema, props);

    if (errors) return [errors];

    const { name, image } = parsedData!;

    return [undefined, new CreateGenreDto(name, image)];
  }
}
