import { ValidationResult } from '../../../domain';
import { callbackSchema, ZodAdapter } from '../../../infrastructure';

export class OAuthCallbackDto {
  constructor(
    public readonly code?: string,
    public readonly error?: string,
  ) {}

  static create(props: Record<string, any>): ValidationResult<OAuthCallbackDto> {
    const { errors, validatedData } = ZodAdapter.validate(callbackSchema, props);

    if (validatedData?.error) {
      return { errors: [{ field: 'auth', message: 'Authentication cancelled or provider error.' }] };
    }

    return errors ? { errors } : { validatedData };
  }
}
