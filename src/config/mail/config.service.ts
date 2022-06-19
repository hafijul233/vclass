import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MailConfigService {

    constructor(private configService: ConfigService) {
    }

    get driver(): string {
        return this.configService.get<string>('mail.driver');
    }

    get host(): string {
        return this.configService.get<string>('mail.host');
    }

    get port(): number {
        return Number(this.configService.get<number>('mail.port'));
    }

    get username(): string {
        return this.configService.get<string>('mail.username');
    }

    get password(): string {
        return this.configService.get<string>('mail.password');
    }

    get encryption(): string {
        return this.configService.get<string>('mail.encryption');
    }

    get email(): string {
        return this.configService.get<string>('mail.email');
    }

    get sender(): string {
        return this.configService.get<string>('mail.sender');
    }
}
