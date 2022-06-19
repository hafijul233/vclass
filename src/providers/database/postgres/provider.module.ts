import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from '@app/config/database/postgres/config.module';
import { PostgresConfigService } from '@app/config/database/postgres/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: async (postgreSqlConfig: PostgresConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: postgreSqlConfig.host,
        port: postgreSqlConfig.port,
        username: postgreSqlConfig.username,
        password: postgreSqlConfig.password,
        database: postgreSqlConfig.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
      inject: [PostgresConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
