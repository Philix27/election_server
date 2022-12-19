import { ICommand } from '@nestjs/cqrs';
import { RemoveUserInput } from '@SituationRoom/user/dtos';

export class RemoveUserCommand implements ICommand {
  constructor(public readonly payload: RemoveUserInput) {}
}
