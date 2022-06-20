import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { AppConfigService } from '@app/config/app/config.service';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

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

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'My API Docs',
  };

  SwaggerModule.setup('docs', app, document, customOptions);

  //Boot the application
  await app.listen(appConfig.port, appConfig.url);

  // Getting app url of running
  console.log(`Application URL: ${await app.getUrl()}/api`);
  console.log(`Swagger URL: ${await app.getUrl()}/docs`);
}

bootstrap();
