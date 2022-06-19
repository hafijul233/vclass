import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AdminModule } from '@app/modules/user/admin/admin.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'users',
        module: AdminModule,
      },
    ]),
    AdminModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
