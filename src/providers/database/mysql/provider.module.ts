import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MySqlConfigModule } from '@app/config/database/mysql/config.module';
import { MySqlConfigService } from '@app/config/database/mysql/config.service';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useFactory: async (mysqlConfig: MySqlConfigService) => {
        return {
          type: 'mysql' as DatabaseType,
          host: mysqlConfig.host,
          port: mysqlConfig.port,
          username: mysqlConfig.username,
          password: mysqlConfig.password,
          database: mysqlConfig.database,
          entities: ['dist/modules/**/*.entity.{ts,js}'], //pattern issue using dist is safe
          subscribers: ['dist/modules/**/*.subscriber.{ts,js}'], //pattern issue using dist is safe
          migrations: ['dist/database/migrations/*.js'], //pattern issue using dist is safe
          logging: ['error'],
          synchronize: false,
          dropSchema: false,
          namingStrategy: new SnakeNamingStrategy(),
          migrationsTableName: 'migrations',
          migrationsTransactionMode: 'each', //'all' is best on production
          charset: 'UTF8MB4_UNICODE_CI',
          cli: {
            migrationsDir: 'src/database/migrations',
          },
        };
      },
      inject: [MySqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlDatabaseProviderModule {}
