import { z } from 'zod';

import { PartialReviewSchema } from '../../config/schemas/review.schema';
import { User } from '../../modules/users/entities/user.entity';
import { UserRole } from '../../modules/shared/interfaces/enums';

export const UserRoleSchema = z.nativeEnum(UserRole);

export const BaseUserSchema = z.object({
  id: z.string().uuid(),
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  avatarUrl: z.string().url(),
  role: UserRoleSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  reviews: z.array(z.lazy(() => PartialReviewSchema)).optional(),
});

export const UserSchema: z.ZodSchema<User> = BaseUserSchema;

export const PartialUserSchema: z.ZodSchema<Partial<User>> = BaseUserSchema.partial();
