import { Router } from "express";
import { AuthService } from "../services";
import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

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
