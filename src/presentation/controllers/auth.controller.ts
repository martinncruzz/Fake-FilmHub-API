import { Request, Response } from "express";

import { ErrorHandlerService } from "..";
import {
  AuthRepository,
  CheckEmailAvailability,
  CheckUserEmailDto,
  GetCurrentSession,
  LoginUser,
  LoginUserDto,
  RegisterUser,
  RegisterUserDto,
} from "../../domain";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = async (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new RegisterUser(this.authRepository)
      .execute(registerUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  checkEmailAvailability = async (req: Request, res: Response) => {
    const [error, checkUserEmailDto] = CheckUserEmailDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CheckEmailAvailability(this.authRepository)
      .execute(checkUserEmailDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getCurrentSession = async (req: Request, res: Response) => {
    const user = new GetCurrentSession().execute(req.body.user);
    return res.json(user);
  };
}
