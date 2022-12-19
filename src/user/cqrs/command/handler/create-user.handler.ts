import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '@SituationRoom/user/user.repository';
import { CreateUserCommand } from '../impl';
import { CreateUserResponseDto } from '@SituationRoom/user/dtos';
import { HttpQueryError } from 'apollo-server-core';
import * as bcrypt from 'bcrypt';
/**
 * @implements {ICommandHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  logger = new Logger(this.constructor.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<CreateUserResponseDto> {
    this.logger.log(`Async ${command.constructor.name}...`);
    const { payload } = command;
    try {
      const userExists = await this.userRepository.find({
        email: payload.email,
      });
      if (userExists) {
        throw new HttpQueryError(400, 'User already exists');
      }

      payload.password = await bcrypt.hash(payload.password, 10);

      const createUser = await this.userRepository.create(payload);

      return { message: 'user created sucessfully', user: createUser };
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }
}
