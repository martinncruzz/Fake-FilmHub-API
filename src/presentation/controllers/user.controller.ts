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

    const [errors, paginationDto] = PaginationDto.create(+page, +limit);
    if (errors) return res.status(400).json({ errors });

    new GetUsersUseCaseImpl(this.userRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [errors, userIdDto] = UserIdDto.create({ user_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetUserByIdUseCaseImpl(this.userRepository)
      .execute(userIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [errors, updateUserDto] = UpdateUserDto.create({
      ...req.body,
      user_id: +id,
    });
    if (errors) return res.status(400).json({ errors });

    new UpdateUserUseCaseImpl(this.userRepository)
      .execute(updateUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
