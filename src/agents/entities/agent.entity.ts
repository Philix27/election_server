import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Agent {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
