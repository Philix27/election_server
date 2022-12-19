import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  bankName?: string;

  @Field({ nullable: true })
  bankAccount?: string;

  @Field({ nullable: true })
  status?: string;
}

@InputType()
export class UpdateUserArgs {
  @Field({ nullable: false })
  id: string;

  @Field(() => UpdateUserInput, { nullable: false })
  data: Partial<UpdateUserInput>;
}

@InputType()
export class RemoveUserInput {
  @Field({ nullable: false })
  id: string;
}
