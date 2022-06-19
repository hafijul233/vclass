import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [AdminModule]
})
export class UserModule {}
