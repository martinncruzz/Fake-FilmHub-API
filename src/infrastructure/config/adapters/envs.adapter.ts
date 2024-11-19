import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(),
  DATABASE_URL: get('DATABASE_URL').required().asUrlString(),
  JWT_SECRET: get('JWT_SECRET').required().asString(),

  GOOGLE_CLIENT_ID: get('GOOGLE_CLIENT_ID').required().asString(),
  GOOGLE_CLIENT_SECRET: get('GOOGLE_CLIENT_SECRET').required().asString(),
  GOOGLE_CALLBACK_URL: get('GOOGLE_CALLBACK_URL').required().asUrlString(),

  FACEBOOK_CLIENT_ID: get('FACEBOOK_CLIENT_ID').required().asInt(),
  FACEBOOK_CLIENT_SECRET: get('FACEBOOK_CLIENT_SECRET').required().asString(),
  FACEBOOK_CALLBACK_URL: get('FACEBOOK_CALLBACK_URL').required().asUrlString(),
};
