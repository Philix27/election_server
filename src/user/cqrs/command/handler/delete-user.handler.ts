import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '@SituationRoom/user/user.repository';
import { RemoveUserCommand } from '../impl';
import { RemoveUserResponseDto } from '@SituationRoom/user/dtos';
import { HttpQueryError } from 'apollo-server-core';
/**
 * @implements {ICommandHandler<RemoveUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@CommandHandler(RemoveUserCommand)
export class DeleteUserCommandHandler
  implements ICommandHandler<RemoveUserCommand>
{
  logger = new Logger(this.constructor.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: RemoveUserCommand): Promise<RemoveUserResponseDto> {
    this.logger.log(`Async ${command.constructor.name}...`);
    const { payload } = command;
    try {
      const deleteUser = await this.userRepository.deleteById(payload.id);

      return {
        message: 'record deleted sucessfully',
        affected_rows: deleteUser,
      };
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }
}
