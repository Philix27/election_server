import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Analytics {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
