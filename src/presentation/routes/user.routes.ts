import { Router } from "express";
import { UserService } from "../services";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.get("/get-users", userController.getUsers);
    router.get("/get-user/:id", userController.getUserById);
    router.post("/create-user", userController.createUser);
    router.put("/update-user/:id", userController.updateUser);
    router.delete("/delete-user/:id", userController.deleteUser);

    return router;
  }
}
