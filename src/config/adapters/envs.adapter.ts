import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(),
  DATABASE_URL: get('DATABASE_URL').required().asUrlString(),
  JWT_SECRET: get('JWT_SECRET').required().asString(),
};
