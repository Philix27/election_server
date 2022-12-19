import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateUserInput,
  CreateUserResponseDto,
  FindOneById,
  FindUsersArgs,
  FindUsersResponseDto,
  GetUserResponseDto,
  RemoveUserInput,
  RemoveUserResponseDto,
  UpdateUserArgs,
  UserDto,
} from './dtos';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreateUserCommand,
  RemoveUserCommand,
  UpdateUserCommand,
} from './cqrs/command';
import { FindUsersQuery, GetUserByIdQuery } from './cqrs';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Mutation(() => CreateUserResponseDto)
  createUser(@Args('input') input: CreateUserInput) {
    return this.commandBus.execute(new CreateUserCommand(input));
  }

  @Query(() => FindUsersResponseDto)
  async findUsers(@Args('input') input: FindUsersArgs) {
    return await this.queryBus.execute(new FindUsersQuery(input));
  }

  @Query(() => GetUserResponseDto)
  findOne(@Args('input') input: FindOneById) {
    return this.queryBus.execute(new GetUserByIdQuery(input));
  }

  @Mutation(() => CreateUserResponseDto)
  updateUser(@Args('input') input: UpdateUserArgs) {
    return this.commandBus.execute(new UpdateUserCommand(input));
  }

  @Mutation(() => RemoveUserResponseDto)
  removeUser(@Args('input') input: RemoveUserInput) {
    return this.commandBus.execute(new RemoveUserCommand(input));
  }
}
