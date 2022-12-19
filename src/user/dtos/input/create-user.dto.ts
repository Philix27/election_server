import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  phone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: false })
  state: string;

  @Field({ nullable: false })
  lga: string;

  @Field({ nullable: false })
  ward?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  bankName?: string;

  @Field({ nullable: true })
  bankAccount?: string;

  @Field({ nullable: true })
  status?: string;
}
