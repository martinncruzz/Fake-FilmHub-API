import { z } from 'zod';

import { CheckUserEmailDto, UpdateUserDto, UserIdDto } from '../../../../application';
import { idSchema } from '../../..';

export const userIdSchema: z.ZodType<UserIdDto> = z.object({ user_id: z.lazy(() => idSchema) });

export const checkUserEmailSchema: z.ZodType<CheckUserEmailDto> = z.object({ email: z.string().email() });

export const updateUserSchema: z.ZodType<UpdateUserDto> = z.object({
  user_id: z.lazy(() => idSchema),
  fullname: z.string().min(5).optional(),
  email: z.string().email().optional(),
  password: z.string().min(5).optional(),
  avatar: z.string().url().optional(),
});
