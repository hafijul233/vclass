import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@nestjs/core';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    RouterModule.register([
      {
        path: 'users',
        module: AdminModule,
      },
    ]),
    AdminModule,
  ],
})
export class UserModule {}
