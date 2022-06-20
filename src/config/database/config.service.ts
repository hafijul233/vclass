import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get connection(): string {
    return this.configService.get<string>('database.connection');
  }

  get host(): string {
    return this.configService.get<string>('database.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('database.port'));
  }

  get database(): string {
    return this.configService.get<string>('database.database');
  }

  get username(): string {
    return this.configService.get<string>('database.username');
  }

  get password(): string {
    return this.configService.get<string>('database.password');
  }
}
