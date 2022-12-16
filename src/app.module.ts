import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [AgentModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
