import { Router } from 'express';

import { UserRepositoryImpl } from '../../infrastructure';
import { UserController } from '..';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = UserRepositoryImpl.instance;

    const userController = new UserController(userRepository);

    router.get('/', userController.getUsers);
    router.get('/:id', userController.getUserById);
    router.get('/:id/reviews', userController.getReviewsByUser);
    router.put('/:id', userController.updateUser);

    return router;
  }
}
