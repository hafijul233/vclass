import { Module } from '@nestjs/common';
import { AppConfigModule } from '@app/config/app/config.module';
import { ApiConfigModule } from '@app/config/api/config.module';
import { ApiConfigService } from '@app/config/api/config.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ApiConfigModule],
      inject: [ApiConfigService],
      useFactory: (apiConfig: ApiConfigService) => ({
        ttl: apiConfig.quota,
        limit: apiConfig.limit,
      }),
    }),
    AppConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
