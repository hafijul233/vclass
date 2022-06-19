import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get connection(): string {
    return this.configService.get<string>('database.mysql.connection');
  }

  get host(): string {
    return this.configService.get<string>('database.mysql.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('database.mysql.port'));
  }

  get database(): string {
    return this.configService.get<string>('database.mysql.database');
  }

  get username(): string {
    return this.configService.get<string>('database.mysql.username');
  }

  get password(): string {
    return this.configService.get<string>('database.mysql.password');
  }
}
