import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  lga: string;

  @Field({ nullable: true })
  ward: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  bankName: string;

  @Field({ nullable: true })
  bankAccount: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}

@ObjectType()
export class CreateUserResponseDto {
  @Field({ nullable: true })
  message?: string;

  @Field(() => UserDto, { nullable: true })
  user?: UserDto;
}

@ObjectType()
export class RemoveUserResponseDto {
  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  affected_rows?: number;
}

@ObjectType()
export class FindUsersResponseDto {
  @Field(() => [UserDto], { nullable: true })
  users?: UserDto[];
}

@ObjectType()
export class GetUserResponseDto {
  @Field(() => UserDto, { nullable: true })
  user?: UserDto;
}
