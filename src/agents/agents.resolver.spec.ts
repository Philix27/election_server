import { Test, TestingModule } from '@nestjs/testing';
import { AgentsResolver } from './agents.resolver';
import { AgentsService } from './agents.service';

describe('AgentsResolver', () => {
  let resolver: AgentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentsResolver, AgentsService],
    }).compile();

    resolver = module.get<AgentsResolver>(AgentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
