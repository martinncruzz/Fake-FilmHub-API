import { z } from 'zod';

import { PartialUserEntity, UserEntity, UserRole } from '../../../domain';
import { idSchema } from '../..';

const baseUserSchema = z.object({
  user_id: z.lazy(() => idSchema),
  fullname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  avatar: z.string().url(),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
});

export const userSchema: z.ZodType<UserEntity> = baseUserSchema;

export const partialUserSchema: z.ZodType<PartialUserEntity> = baseUserSchema.partial();
