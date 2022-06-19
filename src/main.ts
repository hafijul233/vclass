if (process.env.APP_ENV === 'production') {
    require('module-alias/register');
}

import {NestFactory} from '@nestjs/core';
import {AppModule} from '@app/app.module';
import {AppConfigService} from "@app/config/app/config.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
        logger: ['error', 'warn'],
    });

    // Get app config for cors settings and starting the app.
    const appConfig: AppConfigService = app.get(AppConfigService);
    app.setGlobalPrefix('api');
    await app.listen(appConfig.port, appConfig.url);
    //await app.listen(3000);
}

bootstrap();
