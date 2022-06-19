import {DatabaseType} from 'typeorm';
import {Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleAsyncOptions} from '@nestjs/typeorm';
import {MySqlConfigModule} from '@app/config/database/mysql/config.module';
import {MySqlConfigService} from '@app/config/database/mysql/config.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [MySqlConfigModule],
            useFactory: async (mysqlConfig: MySqlConfigService) => ({
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
            inject: [MySqlConfigService],
        } as TypeOrmModuleAsyncOptions),
    ],
})
export class MysqlDatabaseProviderModule {
}
