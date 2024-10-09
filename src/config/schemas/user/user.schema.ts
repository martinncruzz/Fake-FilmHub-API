import { z } from 'zod';

import { UserEntity, UserRole } from '../../../domain';
import { idSchema } from '../..';

export const userSchema: z.ZodType<UserEntity> = z.object({
  user_id: z.lazy(() => idSchema),
  fullname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  avatar: z.string().url(),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
});
