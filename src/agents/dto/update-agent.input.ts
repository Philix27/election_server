import { CreateAgentInput } from './create-agent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAgentInput extends PartialType(CreateAgentInput) {
  @Field(() => Int)
  id: number;
}
