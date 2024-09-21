import { Request, Response } from "express";

import { ErrorHandlerService } from "..";
import {
  GetUserByIdUseCaseImpl,
  GetUsersUseCaseImpl,
  PaginationDto,
  UpdateUserDto,
  UpdateUserUseCaseImpl,
  UserIdDto,
  UserRepository,
} from "../../domain";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });

    new GetUsersUseCaseImpl(this.userRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, userIdDto] = UserIdDto.get({ user_id: +id });
    if (error) return res.status(400).json({ error });

    new GetUserByIdUseCaseImpl(this.userRepository)
      .execute(userIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateUserDto] = UpdateUserDto.update({
      ...req.body,
      user_id: +id,
    });
    if (error) return res.status(400).json({ error });

    new UpdateUserUseCaseImpl(this.userRepository)
      .execute(updateUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
