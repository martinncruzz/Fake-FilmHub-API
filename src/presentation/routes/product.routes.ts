import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();

    const productService = new ProductService();
    const productController = new ProductController(productService);

    router.get("/get-products", productController.getProducts);
    router.get("/get-product/:id", productController.getProductById);
    router.post("/create-product", productController.createProduct);
    router.put("/update-product/:id", productController.updateProduct);
    router.delete("/delete-product/:id", productController.deleteProduct);

    return router;
  }
}
