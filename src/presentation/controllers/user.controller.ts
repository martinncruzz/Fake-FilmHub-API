import { Request, Response } from "express";

import {
  CheckEmailAvailability,
  CheckUserEmailDto,
  CreateUser,
  CreateUserDto,
  GetUserById,
  GetUsers,
  PaginationDto,
  UpdateUser,
  UpdateUserDto,
  UserIdDto,
  UserRepository,
} from "../../domain";
import { ErrorHandlerService } from "..";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });

    new GetUsers(this.userRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, userIdDto] = UserIdDto.get({ user_id: +id });
    if (error) return res.status(400).json({ error });

    new GetUserById(this.userRepository)
      .execute(userIdDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createUser = async (req: Request, res: Response) => {
    const [error, createUserDto] = CreateUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateUser(this.userRepository)
      .execute(createUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  checkEmailAvailability = async (req: Request, res: Response) => {
    const [error, checkUserEmailDto] = CheckUserEmailDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CheckEmailAvailability(this.userRepository)
      .execute(checkUserEmailDto!)
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

    new UpdateUser(this.userRepository)
      .execute(updateUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
