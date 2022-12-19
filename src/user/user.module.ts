import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities';
import { UserQueryHandlers, UserCommandHandlers } from './cqrs';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserResolver,
    UserRepository,
    ...UserCommandHandlers,
    ...UserQueryHandlers,
  ],
})
export class UserModule {}
