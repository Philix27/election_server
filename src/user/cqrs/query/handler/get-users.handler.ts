import { Logger } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@SituationRoom/user/user.repository';
import { GetUserByIdQuery } from '../impl';
import { GetUserResponseDto } from '@SituationRoom/user/dtos';

/**
 * @implements {IQueryHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@QueryHandler(GetUserByIdQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserByIdQuery> {
  logger = new Logger(this.constructor.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: GetUserByIdQuery): Promise<GetUserResponseDto> {
    this.logger.log(`Async ${command.constructor.name}...`);
    const { payload } = command;
    try {
      const user = await this.userRepository.findById(payload._id);

      return { user };
    } catch (error) {
      this.logger.log(error);

      throw error;
    }
  }
}
