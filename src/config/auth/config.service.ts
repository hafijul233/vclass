import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with api config based operations.
 *
 * @class
 */
@Injectable()
export class AuthConfigService {
  constructor(private configService: ConfigService) {}

  get allowRegister(): boolean {
    return this.configService.get<boolean>('auth.allowRegister');
  }

  get algorithm(): string {
    return this.configService.get<string>('auth.algorithm');
  }

  get memoryCost(): number {
    return Number(this.configService.get<number>('auth.memoryCost'));
  }

  get timeCost(): number {
    return Number(this.configService.get<number>('auth.timeCost'));
  }

  get thread(): number {
    return Number(this.configService.get<number>('auth.thread'));
  }

  get passwordLength(): number {
    return Number(this.configService.get<number>('auth.passwordLength'));
  }
}
