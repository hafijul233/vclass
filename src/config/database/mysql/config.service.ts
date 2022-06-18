import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MySqlConfigService {

    constructor(private configService: ConfigService) {
    }

    get host(): string {
        return this.configService.get<string>('mysql.host');
    }

    get port(): number {
        return Number(this.configService.get<number>('mysql.port'));
    }

    get database(): string {
        return this.configService.get<string>('mysql.database');
    }

    get username(): string {
        return this.configService.get<string>('mysql.username');
    }

    get password(): string {
        return this.configService.get<string>('mysql.password');
    }
}
