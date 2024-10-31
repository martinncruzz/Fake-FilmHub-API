import { ValidationResult } from '../../../domain';
import { callbackSchema, ZodAdapter } from '../../../infrastructure';

export class OAuthCallbackDto {
  constructor(public readonly code: string) {}

  static create(props: Record<string, any>): ValidationResult<OAuthCallbackDto> {
    const { errors, validatedData } = ZodAdapter.validate(callbackSchema, props);

    if (errors) {
      return {
        errors: [
          {
            field: 'oauth',
            message:
              'Authentication process was not completed. Please try again or contact support if the issue persists.',
          },
        ],
      };
    }

    return errors ? { errors } : { validatedData };
  }
}
