import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AgentsModule } from './agents/agents.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [UserModule, AgentsModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
