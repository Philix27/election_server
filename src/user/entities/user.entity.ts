import {
  BaseEntity,
  UserRoles,
  userRolesType,
} from '@SituationRoom/libs/database';
import { ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'test_agents3' })
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  state: string;

  @Column({ type: 'varchar' })
  lga: string;

  @Column({ type: 'varchar' })
  ward: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  bankName: string;

  @Column({ type: 'varchar' })
  bankAccount: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.AGENT })
  role: userRolesType;
}
