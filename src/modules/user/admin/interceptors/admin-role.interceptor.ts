import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RoleEnum } from '@app/common/constants';

@Injectable()
export class AdminRoleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const role = request.body['role'] ?? null;
    if (!role) {
      request.body['role'] = RoleEnum.Admin;
    }

    return next.handle();
  }
}
