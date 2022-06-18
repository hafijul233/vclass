import * as Joi from 'joi';
import {Module} from '@nestjs/common';
import configuration from './configuration';
import {PostgreSqlConfigService} from './config.service';
import {ConfigModule, ConfigService} from '@nestjs/config';

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
                DB_HOST: Joi.string().default('127.0.0.1'),
                DB_PORT: Joi.number().default(5432),
                DB_DATABASE: Joi.string().default("nestjs"),
                DB_USERNAME: Joi.string().default('root'),
                DB_PASSWORD: Joi.string().default('')
            }),
        }),
    ],
    providers: [ConfigService, PostgreSqlConfigService],
    exports: [ConfigService, PostgreSqlConfigService],
})
export class PostgreSqlConfigModule {
}
