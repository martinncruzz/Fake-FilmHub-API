import { Request, Response } from "express";

import { ErrorHandlerService, UserService } from "..";
import {
  CreateUserDto,
  UpdateUserDto,
  UserIdDto,
  CheckUserEmailDto,
  PaginationDto,
} from "../../domain";

export class UserController {
  constructor(private readonly userService: UserService) {}
  getUsers = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit);

    if (error) return res.status(400).json({ error });

    this.userService
      .getUsers(paginationDto!)
      .then((users) => res.status(200).json(users))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, userIdDto] = UserIdDto.get({ user_id: +id });

    if (error) return res.status(400).json({ error });

    this.userService
      .getUserById(userIdDto!)
      .then((userFound) => res.status(200).json(userFound))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  createUser = async (req: Request, res: Response) => {
    const [error, createUserDto] = CreateUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.userService
      .createUser(createUserDto!)
      .then((newUser) => res.status(200).json(newUser))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  checkEmail = async (req: Request, res: Response) => {
    const [error, checkUserEmailDto] = CheckUserEmailDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.userService
      .checkEmail(checkUserEmailDto!)
      .then((isAvailable) => res.status(200).json(isAvailable))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateUserDto] = UpdateUserDto.update({
      ...req.body,
      user_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.userService
      .updateUser(updateUserDto!)
      .then((updatedUser) => res.status(200).json(updatedUser))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
