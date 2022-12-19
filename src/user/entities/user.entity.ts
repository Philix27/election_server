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

// CREATE TABLE test_agents (
//   _id     SERIAL PRIMARY KEY,
//  firstname     VARCHAR(50),
//  lastname      VARCHAR(50),
//  lga       VARCHAR(50),
// state       VARCHAR(50),
// ward       VARCHAR(50),
// email       VARCHAR(50),
// phone       VARCHAR(50),
// address       VARCHAR(50),
// bankName       VARCHAR(50),
// bankAccount       VARCHAR(50)

// );
