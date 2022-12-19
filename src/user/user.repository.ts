import { BaseRepository } from '@SituationRoom/libs/database';
import { UserEntity } from './entities';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(entity: EntityManager) {
    super(UserEntity, entity);
  }
}
