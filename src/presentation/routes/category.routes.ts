import { Router } from "express";
import { CategoryService } from "../services";
import { CategoryController } from "../controllers/category.controller";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    const categoryService = new CategoryService();
    const categoryController = new CategoryController(categoryService);

    router.get("/get-categories", categoryController.getCategories);
    router.get("/get-category/:id", categoryController.getCategoryById);
    router.post("/create-category", categoryController.createCategory);
    router.put("/update-category/:id", categoryController.updateCategory);
    router.delete("/delete-category/:id", categoryController.deleteCategory);

    return router;
  }
}
