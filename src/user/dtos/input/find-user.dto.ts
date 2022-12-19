import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUsersInput {
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
  state?: string;

  @Field({ nullable: true })
  lga?: string;

  @Field({ nullable: true })
  ward?: string;

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

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}

@InputType()
export class FindUsersArgs {
  @Field(() => FindUsersInput)
  query?: FindUsersInput;
}

@InputType()
export class FindOneById {
  @Field()
  _id: string;
}
