import { ICommand } from '@nestjs/cqrs';
import { CreateUserInput } from '@SituationRoom/user/dtos';

export class CreateUserCommand implements ICommand {
  constructor(public readonly payload: CreateUserInput) {}
}
