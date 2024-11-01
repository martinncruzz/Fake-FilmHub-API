import { Router } from 'express';

import { AuthDatasourceImpl, AuthRepositoryImpl, AuthServiceImpl } from '../../infrastructure';
import { AuthController, AuthMiddleware } from '..';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authDatasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(authDatasource);
    const authService = new AuthServiceImpl(authRepository);

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
