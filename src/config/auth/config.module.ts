import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AuthConfigService } from './config.service';
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
        AUTH_ALLOW_REGISTER: Joi.boolean().default(true),
        AUTH_ALGORITHM: Joi.string().default(),
        AUTH_MEMORY_COST: Joi.number().default(2048),
        AUTH_TIME_COST: Joi.number().default(10),
        AUTH_THREAD: Joi.number().default(4),
        AUTH_PASSWORD_LENGTH: Joi.number().default(8),
      }),
    }),
  ],
  providers: [ConfigService, AuthConfigService],
  exports: [ConfigService, AuthConfigService],
})
export class AuthConfigModule {}
