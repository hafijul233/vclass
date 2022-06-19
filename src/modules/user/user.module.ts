import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    /*    RouterModule.register([
          {
            path: 'admins',
            module: UserModule,
          },
        ]),*/
    AdminModule,
  ],
})
export class UserModule {}
