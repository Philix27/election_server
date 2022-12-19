import { ICommand } from '@nestjs/cqrs';
import { UpdateUserArgs } from '@SituationRoom/user/dtos';

export class UpdateUserCommand implements ICommand {
  constructor(public readonly payload: UpdateUserArgs) {}
}
