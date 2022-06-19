import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  env: process.env.APP_ENV,
  key: process.env.APP_KEY,
  debug: process.env.APP_DEBUG,
  port: process.env.APP_PORT,
  url: process.env.APP_URL,
  timezone: process.env.APP_TIMEZONE,
  locale: process.env.APP_LOCALE,
  copyright: process.env.APP_COPYRIGHT,
  short_name: process.env.APP_SHORT_NAME,
  version: process.env.APP_VERSION,
}));
