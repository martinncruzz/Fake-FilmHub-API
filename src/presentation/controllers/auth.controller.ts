import { Request, Response } from 'express';

import { AuthRepository } from '../../domain';
import {
  CheckUserEmailDto,
  GetCurrentSessionUseCaseImpl,
  IsEmailAvailableUseCaseImpl,
  LoginUserDto,
  LoginUserUseCaseImpl,
  RegisterUserDto,
  RegisterUserUseCaseImpl,
} from '../../application';
import { ErrorHandlerService } from '..';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = RegisterUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new RegisterUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = LoginUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new LoginUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  isEmailAvailable = async (req: Request, res: Response) => {
    const { errors, validatedData } = CheckUserEmailDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new IsEmailAvailableUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getCurrentSession = async (req: Request, res: Response) => {
    const user = new GetCurrentSessionUseCaseImpl().execute(req.body.user);
    return res.json(user);
  };
}
