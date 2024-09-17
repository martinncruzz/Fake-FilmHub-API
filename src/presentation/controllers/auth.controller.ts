import { Request, Response } from "express";

import { AuthService, ErrorHandlerService } from "..";
import { LoginUserDto, UserIdDto } from "../../domain";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  loginUser = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.authService
      .loginUser(loginUserDto!)
      .then((token) => res.status(200).json(token))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };

  getCurrentSession = (req: Request, res: Response) => {
    const [error, userIdDto] = UserIdDto.get(req.body);

    if (error) return res.status(400).json({ error });

    this.authService
      .getCurrentSession(userIdDto!)
      .then((user) => res.status(200).json(user))
      .catch((error) => ErrorHandlerService.handleError(error, res));
  };
}
