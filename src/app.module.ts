import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AgentsModule } from './agents/agents.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ConfigurationService,
  TypeOrmConfigService,
} from '@SituationRoom/libs';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      path: '/apc-api',
      driver: ApolloDriver,
      playground: true,
      uploads: false, // disable built-in upload handling
      introspection: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    AgentsModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {}
