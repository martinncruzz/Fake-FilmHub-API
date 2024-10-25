import { OAuthProvider, ValidationResult } from '../../../domain';
import { providerSchema, ZodAdapter } from '../../../config';

export class OAuthProviderDto {
  private constructor(public readonly provider: OAuthProvider) {}

  static create(props: Record<string, any>): ValidationResult<OAuthProviderDto> {
    const { errors, validatedData } = ZodAdapter.validate(providerSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
