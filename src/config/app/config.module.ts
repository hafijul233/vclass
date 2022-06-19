import * as Joi from '@hapi/joi';
import {Module} from '@nestjs/common';
import configuration from './configuration';
import {AppConfigService} from './config.service';
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
                APP_KEY: Joi.string().default(null),
                APP_DEBUG: Joi.boolean().default(false),
                APP_TIMEZONE: Joi.string().default("Asia/Dhaka"),
                APP_LOCALE: Joi.string().valid('en', 'bd').default('en'),
                APP_COPYRIGHTS: Joi.string().default("Copyright"),
                APP_SHORT_NAME: Joi.string().default('MA'),
                APP_VERSION: Joi.string().default("1.0.0"),
                APP_NAME: Joi.string().default('MyApp'),
                APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
                APP_URL: Joi.string().default('http://localhost'),
                APP_PORT: Joi.number().default(3000),
            }),
        }),
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {
}
