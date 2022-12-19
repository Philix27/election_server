import { Logger } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@SituationRoom/user/user.repository';
import { FindUsersQuery } from '../impl';
import { FindUsersResponseDto } from '@SituationRoom/user/dtos';

/**
 * @implements {IQueryHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@QueryHandler(FindUsersQuery)
export class FindUsersQueryHandler implements IQueryHandler<FindUsersQuery> {
  logger = new Logger(this.constructor.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: FindUsersQuery): Promise<FindUsersResponseDto> {
    this.logger.log(`Async ${command.constructor.name}...`);

    const { payload } = command;

    try {
      const users = await this.userRepository.find(payload.query);

      return { users };
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }
}
