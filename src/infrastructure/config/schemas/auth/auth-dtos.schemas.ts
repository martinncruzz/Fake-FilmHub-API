import { z } from 'zod';

import { OAuthProvider } from '../../../../domain';
import {
  CheckUserEmailDto,
  LoginUserDto,
  OAuthCallbackDto,
  OAuthProviderDto,
  RegisterUserDto,
} from '../../../../application';

export const registerUserSchema: z.ZodType<RegisterUserDto> = z.object({
  fullname: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
  avatar: z.string().url(),
});

export const loginUserSchema: z.ZodType<LoginUserDto> = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const checkUserEmailSchema: z.ZodType<CheckUserEmailDto> = z.object({ email: z.string().email() });

export const providerSchema: z.ZodType<OAuthProviderDto> = z.object({ provider: z.enum([OAuthProvider.GOOGLE]) });

export const callbackSchema: z.ZodType<OAuthCallbackDto> = z.object({ code: z.string().min(1) });
