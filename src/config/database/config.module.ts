import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { DatabaseConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_CONNECTION: Joi.string().default('mysql'),
        DB_HOST: Joi.string().default('127.0.0.1'),
        DB_PORT: Joi.number().default(3306),
        DB_DATABASE: Joi.string().default('nestjs'),
        DB_USERNAME: Joi.string().default('root'),
        DB_PASSWORD: Joi.string().default(''),
      }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
