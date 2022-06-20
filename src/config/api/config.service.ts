import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with api config based operations.
 *
 * @class
 */
@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get quota(): number {
    return Number(this.configService.get<number>('api.quota'));
  }

  get limit(): number {
    return Number(this.configService.get<number>('api.limit'));
  }
}
