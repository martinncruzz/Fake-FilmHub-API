import { z } from "zod";

import {
  CheckUserEmailDto,
  LoginUserDto,
  RegisterUserDto,
  UpdateUserDto,
  UserIdDto,
} from "../../../domain";

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

export const checkUserEmailSchema: z.ZodType<CheckUserEmailDto> = z.object({
  email: z.string().email(),
});

export const userIdSchema: z.ZodType<UserIdDto> = z.object({
  user_id: z.number().positive().int(),
});

export const updateUserSchema: z.ZodType<UpdateUserDto> = z.object({
  user_id: z.number().positive().int(),
  fullname: z.string().min(5).optional(),
  email: z.string().email().optional(),
  password: z.string().min(5).optional(),
  avatar: z.string().url().optional(),
});
