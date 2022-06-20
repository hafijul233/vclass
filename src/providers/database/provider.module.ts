import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DatabaseConfigModule } from '@app/config/database/config.module';
import { DatabaseConfigService } from '@app/config/database/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: async (databaseConfig: DatabaseConfigService) => {
        return {
          type: databaseConfig.connection as DatabaseType,
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.database,
          autoLoadEntities: true,
          /*entities: ['dist/modules/!**!/!*.entity.{ts,js}'], //pattern issue using dist is safe
          subscribers: ['dist/modules/!**!/!*.subscriber.{ts,js}'], //pattern issue using dist is safe
          migrations: ['dist/database/migrations/!*.js'], //pattern issue using dist is safe*/
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
      inject: [DatabaseConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseProviderModule {}
