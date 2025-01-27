import { ZodSchema } from 'zod';

interface ValidationSuccess<T> {
  success: true;
  data: T;
  error?: never;
}

interface ValidationError {
  success: false;
  error: unknown;
  data?: never;
}

export class ValidatorAdapter {
  static validate<T>(data: unknown, schema: ZodSchema<T>): ValidationSuccess<T> | ValidationError {
    return schema.safeParse(data);
  }
}
