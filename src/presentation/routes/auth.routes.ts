import { Router } from 'express';

import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';
import { AuthController, AuthMiddleware } from '..';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authDatasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(authDatasource);

    const authController = new AuthController(authRepository);

    router.post('/register', authController.registerUser);
    router.post('/login', authController.loginUser);
    router.post('/is-available', authController.isEmailAvailable);
    router.get('/profile', [AuthMiddleware.validateJWT], authController.getCurrentSession);

    return router;
  }
}
