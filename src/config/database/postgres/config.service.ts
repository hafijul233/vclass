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
    return this.configService.get<string>('postgres.connection');
  }

  get host(): string {
    return this.configService.get<string>('postgres.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('postgres.port'));
  }

  get database(): string {
    return this.configService.get<string>('postgres.database');
  }

  get username(): string {
    return this.configService.get<string>('postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('postgres.password');
  }
}
