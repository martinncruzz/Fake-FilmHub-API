import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

type AuthStrategy = 'jwt' | 'google' | 'facebook';

interface AuthOptions {
  strategy?: AuthStrategy;
}

export function Auth(options: AuthOptions = {}) {
  const { strategy = 'jwt' } = options;
  return applyDecorators(UseGuards(AuthGuard(strategy)));
}
