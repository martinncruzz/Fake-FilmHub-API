import { ExecutionContext, InternalServerErrorException, createParamDecorator } from '@nestjs/common';

import { User } from '@modules/users/entities/user.entity';

export const GetUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest();
  const user = req.user as User;

  if (!user) throw new InternalServerErrorException('User not found (request)');

  return user;
});
