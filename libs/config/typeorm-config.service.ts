import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url:
        process.env.NODE_ENV === 'development'
          ? process.env.POSTGRES_DEV_URL
          : process.env.POSTGRES_URL,
      synchronize: true,
      autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    };
  }
}
