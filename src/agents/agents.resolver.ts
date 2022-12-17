import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AgentsService } from './agents.service';
import { Agent } from './entities/agent.entity';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';

@Resolver(() => Agent)
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}

  @Mutation(() => Agent)
  createAgent(@Args('createAgentInput') createAgentInput: CreateAgentInput) {
    return this.agentsService.create(createAgentInput);
  }

  @Query(() => [Agent], { name: 'agents' })
  findAll() {
    return this.agentsService.findAll();
  }

  @Query(() => Agent, { name: 'agent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.agentsService.findOne(id);
  }

  @Mutation(() => Agent)
  updateAgent(@Args('updateAgentInput') updateAgentInput: UpdateAgentInput) {
    return this.agentsService.update(updateAgentInput.id, updateAgentInput);
  }

  @Mutation(() => Agent)
  removeAgent(@Args('id', { type: () => Int }) id: number) {
    return this.agentsService.remove(id);
  }
}
