import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ApiConfigService } from './config.service';
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
        APP_QUOTA: Joi.number().default(60),
        APP_LIMIT: Joi.number().default(60),
      }),
    }),
  ],
  providers: [ConfigService, ApiConfigService],
  exports: [ConfigService, ApiConfigService],
})
export class ApiConfigModule {}
