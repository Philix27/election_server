import { CreateAnalyticsInput } from './create-analytics.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnalyticsInput extends PartialType(CreateAnalyticsInput) {
  @Field(() => Int)
  id: number;
}
