import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgreSqlConfigModule } from '@app/config/database/postgres/config.module';
import { PostgreSqlConfigService } from '@app/config/database/postgres/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgreSqlConfigModule],
      useFactory: async (postgreSqlConfig: PostgreSqlConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: postgreSqlConfig.host,
        port: postgreSqlConfig.port,
        username: postgreSqlConfig.username,
        password: postgreSqlConfig.password,
        database: postgreSqlConfig.database,
        entities: [
          // ... All PostgreSql based schemas/entities
        ],
      }),
      inject: [PostgreSqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
