import { IQuery } from '@nestjs/cqrs';
import { FindUsersArgs } from '@SituationRoom/user/dtos';

export class FindUsersQuery implements IQuery {
  constructor(public readonly payload: FindUsersArgs) {}
}
