import { Request, Response } from 'express';

import { UserRepository } from '../../domain';
import {
  CheckUserEmailDto,
  GetReviewsByUserUseCaseImpl,
  GetUserByEmailUseCaseImpl,
  GetUserByIdUseCaseImpl,
  GetUsersUseCaseImpl,
  PaginationDto,
  UpdateUserDto,
  UpdateUserUseCaseImpl,
  UserIdDto,
} from '../../application';
import { ErrorHandler } from '..';

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const { errors: paginationErrors, validatedData: paginationDto } = PaginationDto.create(+page, +limit);
    if (paginationErrors) return res.status(400).json({ errors: paginationErrors });

    new GetUsersUseCaseImpl(this.userRepository)
      .execute(paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = UserIdDto.create({ user_id: +id });
    if (errors) return res.status(400).json({ errors });

    new GetUserByIdUseCaseImpl(this.userRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  getUserByEmail = async (req: Request, res: Response) => {
    const { errors, validatedData } = CheckUserEmailDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new GetUserByEmailUseCaseImpl(this.userRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  getReviewsByUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const { errors, validatedData } = UserIdDto.create({ user_id: +id });
    if (errors) return res.status(400).json({ errors });

    const { errors: paginationErrors, validatedData: paginationDto } = PaginationDto.create(+page, +limit);
    if (paginationErrors) return res.status(400).json({ errors: paginationErrors });

    new GetReviewsByUserUseCaseImpl(this.userRepository)
      .execute(validatedData!, paginationDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { errors, validatedData } = UpdateUserDto.create({ ...req.body, user_id: +id });
    if (errors) return res.status(400).json({ errors });

    new UpdateUserUseCaseImpl(this.userRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };
}
