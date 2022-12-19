import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '@SituationRoom/user/user.repository';
import { UpdateUserCommand } from '../impl';
import { CreateUserResponseDto } from '@SituationRoom/user/dtos';
import { HttpQueryError } from 'apollo-server-core';
import * as bcrypt from 'bcrypt';
/**
 * @implements {ICommandHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  logger = new Logger(this.constructor.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: UpdateUserCommand): Promise<any> {
    this.logger.log(`Async ${command.constructor.name}...`);
    const { payload } = command;
    try {
      if (payload.data.password) {
        payload.data.password = await bcrypt.hash(payload.data.password, 10);
      }

      const updatedUser = await this.userRepository.updateById(
        payload.id,
        payload.data,
      );

      return { message: 'user updated sucessfully', user: updatedUser };
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }
}
