import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { AppConfigService } from '@app/config/app/config.service';

if (process.env.APP_ENV === 'production') {
  require('module-alias/register');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api').useGlobalPipes(new ValidationPipe());

  // Get app config for cors settings and starting the app.
  const appConfig: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfig.port, appConfig.url);

  // Getting app url of running
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
