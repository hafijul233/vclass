import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get shortName(): string {
    return this.configService.get<string>('app.short_name');
  }

  get env(): string {
    return this.configService.get<string>('app.env');
  }

  get key(): string {
    return this.configService.get<string>('app.key');
  }

  get url(): string {
    return this.configService.get<string>('app.url');
  }

  get locale(): string {
    return this.configService.get<string>('app.locale');
  }

  get copyright(): string {
    return this.configService.get<string>('app.copyright');
  }

  get timezone(): string {
    return this.configService.get<string>('app.timezone');
  }

  get version(): string {
    return this.configService.get<string>('app.version');
  }

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }

  get debug(): boolean {
    return Boolean(this.configService.get<boolean>('app.debug'));
  }
}
