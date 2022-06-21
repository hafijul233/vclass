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
    .setTitle('vClass API Documentation')
    .setDescription(
      'vClass stands for Virtual Classroom which was a project assigned to me as an technical assessment test.',
    )
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
  });

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: false,
    },
    customSiteTitle: 'vClass API Documentation',
  };

  SwaggerModule.setup('swagger', app, document, customOptions);

  //Boot the application
  await app.listen(appConfig.port, appConfig.url);

  // Getting app url of running
  console.log(`Application URL: ${await app.getUrl()}/api`);
  console.log(`Swagger URL: ${await app.getUrl()}/swagger`);
}

bootstrap();
