import { Request, Response } from 'express';

import { AuthRepository, AuthService } from '../../domain';
import {
  GetCurrentSessionUseCaseImpl,
  GetOAuthUrlUseCaseImpl,
  HandleOAuthCallbackUseCaseImpl,
  LoginUserDto,
  LoginUserUseCaseImpl,
  OAuthCallbackDto,
  OAuthProviderDto,
  RegisterUserDto,
  RegisterUserUseCaseImpl,
} from '../../application';
import { ErrorHandler } from '..';

export class AuthController {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authService: AuthService,
  ) {}

  registerUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = RegisterUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new RegisterUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    const { errors, validatedData } = LoginUserDto.create(req.body);
    if (errors) return res.status(400).json({ errors });

    new LoginUserUseCaseImpl(this.authRepository)
      .execute(validatedData!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };

  getCurrentSession = async (req: Request, res: Response) => {
    const user = new GetCurrentSessionUseCaseImpl().execute(req.body.user);
    res.json(user);
  };

  getOAuthUrl = async (req: Request, res: Response) => {
    const { errors, validatedData } = OAuthProviderDto.create(req.params);
    if (errors) return res.status(400).json({ errors });

    const url = new GetOAuthUrlUseCaseImpl().execute(validatedData!);
    res.json(url);
  };

  handleOAuthCallback = async (req: Request, res: Response) => {
    const { errors: providerErrors, validatedData: oauthProviderDto } = OAuthProviderDto.create(req.params);
    if (providerErrors) return res.status(400).json({ errors: providerErrors });

    const { errors: callbackErrors, validatedData: oauthCallbackDto } = OAuthCallbackDto.create(req.query);
    if (callbackErrors) return res.status(400).json({ errors: callbackErrors });

    new HandleOAuthCallbackUseCaseImpl(this.authService)
      .execute(oauthProviderDto!, oauthCallbackDto!)
      .then((data) => res.json(data))
      .catch((error) => ErrorHandler.handleError(error, res));
  };
}
