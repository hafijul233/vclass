import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  quota: process.env.API_QUOTA,
  limit: process.env.API_LIMIT,
}));
