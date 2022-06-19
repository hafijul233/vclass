import * as Joi from '@hapi/joi';
import {Module} from '@nestjs/common';
import configuration from './configuration';
import {MailConfigService} from './config.service';
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
                MAIL_DRIVER: Joi.string().default('log'),
                MAIL_HOST: Joi.string().default('127.0.0.1'),
                MAIL_PORT: Joi.number().default(3306),
                MAIL_DATABASE: Joi.string().default("nestjs"),
                MAIL_USERNAME: Joi.string().default('root'),
                MAIL_PASSWORD: Joi.string().default(''),
                MAIL_ENCRYPTION: Joi.string().default(null),
                MAIL_EMAIL: Joi.string().default('admin@localhost.com'),
                MAIL_SENDER: Joi.string().default('')
            }),
        }),
    ],
    providers: [ConfigService, MailConfigService],
    exports: [ConfigService, MailConfigService],
})
export class MailConfigModule {
}
