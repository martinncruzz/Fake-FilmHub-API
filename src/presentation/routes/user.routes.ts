import { Router } from 'express';

import { UserController } from '..';
import { UserDatasourceImpl, UserRepositoryImpl } from '../../infrastructure';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userDatasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(userDatasource);

    const userController = new UserController(userRepository);

    router.get('/', userController.getUsers);
    router.get('/:id', userController.getUserById);
    router.get('/:id/reviews', userController.getReviewsByUser);
    router.put('/:id', userController.updateUser);

    return router;
  }
}
