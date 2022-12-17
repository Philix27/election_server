import { Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';

@Injectable()
export class AgentsService {
  create(createAgentInput: CreateAgentInput) {
    return 'This action adds a new agent';
  }

  findAll() {
    return `This action returns all agents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentInput: UpdateAgentInput) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
