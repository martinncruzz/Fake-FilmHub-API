import { Request, Response } from "express";

import { AuthService } from "..";
import { CustomError, LoginUserDto, UserIdDto } from "../../domain";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json({ error: error.message });

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  loginUser = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.authService
      .loginUser(loginUserDto!)
      .then((token) => res.status(200).json(token))
      .catch((error) => this.handleError(error, res));
  };

  getCurrentSession = (req: Request, res: Response) => {
    const [error, userIdDto] = UserIdDto.get(req.body);

    if (error) return res.status(400).json({ error });

    this.authService
      .getCurrentSession(userIdDto!)
      .then((user) => res.status(200).json(user))
      .catch((error) => this.handleError(error, res));
  };
}
