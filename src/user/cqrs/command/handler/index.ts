import { CreateUserCommandHandler } from './create-user.handler';
import { DeleteUserCommandHandler } from './delete-user.handler';
import { UpdateUserCommandHandler } from './update-user.handler';

export const UserCommandHandlers = [
  CreateUserCommandHandler,
  DeleteUserCommandHandler,
  UpdateUserCommandHandler,
];
