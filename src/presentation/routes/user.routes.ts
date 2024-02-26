import { Router } from "express";
import { UserService } from "../services";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.get("/", userController.getUsers);
    router.get("/:id", userController.getUserById);
    router.post("/", userController.createUser);
    router.post("/is-available", userController.checkEmail);
    router.put("/:id", userController.updateUser);

    return router;
  }
}
