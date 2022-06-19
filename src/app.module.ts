import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { AppConfigModule } from '@app/config/app/config.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@app/modules/user/user.module';
import { RouterModule } from '@nestjs/core';
import { AdminModule } from '@app/modules/user/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RouterModule.register([
      {
        path: 'users',
        module: UserModule,
        children: [
          {
            path: 'admins',
            module: AdminModule,
          },
        ],
      },
    ]),
    AppConfigModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
