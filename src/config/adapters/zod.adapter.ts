import { z, ZodError } from "zod";
import { ValidationResult } from "../../domain";

export class ZodAdapter {
  static validate<T>(schema: z.ZodSchema<T>, data: any): ValidationResult<T> {
    try {
      const parsedData = schema.parse(data);
      return [undefined, parsedData];
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));
        return [errors];
      }
      return [[{ field: "unknown", message: "Unknown validation error" }]];
    }
  }
}
