import {DatabaseType} from 'typeorm';
import {Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleAsyncOptions} from '@nestjs/typeorm';
import {MysqlConfigModule} from '../../../config/database/mysql/config.module';
import {MysqlConfigService} from '../../../config/database/mysql/config.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [MysqlConfigModule],
            useFactory: async (mysqlConfig: MysqlConfigService) => ({
                type: 'mysql' as DatabaseType,
                host: mysqlConfig.host,
                port: mysqlConfig.port,
                username: mysqlConfig.username,
                password: mysqlConfig.password,
                database: mysqlConfig.database,
                entities: [
                    // ... All MySQL based schemas/entities
                ],
            }),
            inject: [MysqlConfigService],
        } as TypeOrmModuleAsyncOptions),
    ],
})
export class MysqlDatabaseProviderModule {
}
