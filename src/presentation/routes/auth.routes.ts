import { Router } from "express";

import { AuthController, AuthMiddleware, AuthService } from "..";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthService();
    const authController = new AuthController(authService);

    router.post("/login", authController.loginUser);
    router.get(
      "/profile",
      [AuthMiddleware.validateJWT],
      authController.getCurrentSession
    );

    return router;
  }
}
