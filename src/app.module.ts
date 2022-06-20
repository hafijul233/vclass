import { Module } from '@nestjs/common';
import { AppConfigModule } from '@app/config/app/config.module';
import { ApiConfigModule } from '@app/config/api/config.module';
import { ApiConfigService } from '@app/config/api/config.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseProviderModule } from '@app/providers/database/provider.module';
import { UserModule } from '@app/modules/user/user.module';

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
    DatabaseProviderModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
