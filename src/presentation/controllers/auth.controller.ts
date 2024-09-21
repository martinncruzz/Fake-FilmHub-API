import { Request, Response } from "express";

import { ErrorHandlerService } from "..";
import {
  AuthRepository,
  CheckUserEmailDto,
  GetCurrentSessionUseCaseImpl,
  IsEmailAvailableUseCaseImpl,
  LoginUserDto,
  LoginUserUseCaseImpl,
  RegisterUserDto,
  RegisterUserUseCaseImpl,
} from "../../domain";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = async (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new RegisterUserUseCaseImpl(this.authRepository)
      .execute(registerUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new LoginUserUseCaseImpl(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  isEmailAvailable = async (req: Request, res: Response) => {
    const [error, checkUserEmailDto] = CheckUserEmailDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new IsEmailAvailableUseCaseImpl(this.authRepository)
      .execute(checkUserEmailDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getCurrentSession = async (req: Request, res: Response) => {
    const user = new GetCurrentSessionUseCaseImpl().execute(req.body.user);
    return res.json(user);
  };
}
