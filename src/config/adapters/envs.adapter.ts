import { envsSchema } from '@config/schemas/envs.schema';

process.loadEnvFile();

const { success, error, data } = envsSchema.safeParse(process.env);

if (!success) {
  console.error('❌ Error in environment variables:', error.format());
  process.exit(1);
}

export const envs = data;
