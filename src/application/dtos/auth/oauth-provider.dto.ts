import { OAuthProvider, ValidationResult } from '../../../domain';
import { providerSchema, ZodAdapter } from '../../../infrastructure';

export class OAuthProviderDto {
  private constructor(public readonly provider: OAuthProvider) {}

  static create(props: Record<string, any>): ValidationResult<OAuthProviderDto> {
    const { errors, validatedData } = ZodAdapter.validate(providerSchema, props);

    if (errors) {
      return { errors: [{ field: 'oauth', message: 'Unhandled provider' }] };
    }

    return errors ? { errors } : { validatedData };
  }
}
