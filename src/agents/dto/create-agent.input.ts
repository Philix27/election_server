import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAgentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
