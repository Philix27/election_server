import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnalyticsInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
