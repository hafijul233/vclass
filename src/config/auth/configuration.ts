import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  allowRegister: process.env.AUTH_ALLOW_REGISTER,
  algorithm: process.env.AUTH_ALGORITHM,
  memoryCost: process.env.AUTH_MEMORY_COST,
  timeCost: process.env.AUTH_TIME_COST,
  thread: process.env.AUTH_THREAD,
  passwordLength: process.env.AUTH_PASSWORD_LENGTH,
}));
