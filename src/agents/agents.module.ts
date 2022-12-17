import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsResolver } from './agents.resolver';

@Module({
  providers: [AgentsResolver, AgentsService]
})
export class AgentsModule {}
