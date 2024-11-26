import { ValidationResult } from '../../../domain';
import { paginationSchema, ZodAdapter } from '../../../infrastructure';

export class PaginationDto {
  private constructor(
    public readonly page: number,
    public readonly limit: number,
  ) {}

  static create(page: number = 1, limit: number = 10): ValidationResult<PaginationDto> {
    const { errors, validatedData } = ZodAdapter.validate(paginationSchema, { page, limit });

    return errors ? { errors } : { validatedData };
  }
}
