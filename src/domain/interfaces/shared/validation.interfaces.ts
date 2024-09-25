export interface ValidationError {
  field: string;
  message: string;
}

export type ValidationResult<T> = [ValidationError[]?, T?];
