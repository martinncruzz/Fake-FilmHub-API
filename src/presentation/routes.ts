import { Router } from "express";
import { ProductRoutes } from "./routes/product.routes";
import { UserRoutes } from "./routes/user.routes";
import { CategoryRoutes } from "./routes/category.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/products", ProductRoutes.routes);
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/categories", CategoryRoutes.routes);

    return router;
  }
}
