import { registerAs } from '@nestjs/config';

export default registerAs('database.mysql', () => ({
  connection: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}));
