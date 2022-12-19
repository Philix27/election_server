import { IQuery } from '@nestjs/cqrs';
import { FindOneById } from '@SituationRoom/user/dtos';

export class GetUserByIdQuery implements IQuery {
  constructor(public readonly payload: FindOneById) {}
}
