import { ValidationResult } from "../..";
import { paginationSchema, ZodAdapter } from "../../../config";

export class PaginationDto {
  private constructor(
    public readonly page: number,
    public readonly limit: number
  ) {}

  static create(
    page: number = 1,
    limit: number = 10
  ): ValidationResult<PaginationDto> {
    const [errors, parsedData] = ZodAdapter.validate(paginationSchema, {
      page,
      limit,
    });

    if (errors) return [errors];

    return [undefined, new PaginationDto(parsedData!.page, parsedData!.limit)];
  }
}
