import { z } from 'zod';

export const envsSchema = z.object({
  PORT: z.coerce.number().int().positive('PORT must be a positive integer'),
  API_URL: z.string().url('API_URL must be a valid URL'),
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
  OAUTH_DEFAULT_PASSWORD: z.string().min(1, 'OAUTH_DEFAULT_PASSWORD is required'),

  GOOGLE_CLIENT_ID: z.string().min(1, 'GOOGLE_CLIENT_ID is required'),
  GOOGLE_CLIENT_SECRET: z.string().min(1, 'GOOGLE_CLIENT_SECRET is required'),
  GOOGLE_CALLBACK_URL: z.string().url('GOOGLE_CALLBACK_URL must be a valid URL'),

  FACEBOOK_CLIENT_ID: z.string().min(1, 'FACEBOOK_CLIENT_ID is required'),
  FACEBOOK_CLIENT_SECRET: z.string().min(1, 'FACEBOOK_CLIENT_SECRET is required'),
  FACEBOOK_CALLBACK_URL: z.string().url('FACEBOOK_CALLBACK_URL must be a valid URL'),
});
