import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get connection(): string {
    return this.configService.get<string>('database.postgres.connection');
  }

  get host(): string {
    return this.configService.get<string>('database.postgres.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('database.postgres.port'));
  }

  get database(): string {
    return this.configService.get<string>('database.postgres.database');
  }

  get username(): string {
    return this.configService.get<string>('database.postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('database.postgres.password');
  }
}
