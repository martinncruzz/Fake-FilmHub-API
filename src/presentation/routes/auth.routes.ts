import { Router } from 'express';

import { AuthRepositoryImpl, AuthServiceImpl } from '../../infrastructure';
import { AuthController, AuthMiddleware } from '..';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authRepository = AuthRepositoryImpl.instance;
    const authService = AuthServiceImpl.instance;

    const authController = new AuthController(authRepository, authService);

    router.post('/register', authController.registerUser);
    router.post('/login', authController.loginUser);
    router.post('/is-available', authController.isEmailAvailable);
    router.get('/profile', [AuthMiddleware.validateJWT], authController.getCurrentSession);
    router.get('/:provider/url', authController.getOAuthUrl);
    router.get('/:provider/callback', authController.handleOAuthCallback);

    return router;
  }
}
