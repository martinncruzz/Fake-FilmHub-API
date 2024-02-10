import { Request, Response } from "express";
import {
  CreateProductDto,
  DeleteProductDto,
  GetProductDto,
  UpdateProductDto,
  CustomError,
} from "../../domain";
import { ProductService } from "../services";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json({ error: error.message });

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getProducts = async (req: Request, res: Response) => {
    this.productService
      .getProducts()
      .then((products) => res.status(200).json(products))
      .catch((error) => this.handleError(error, res));
  };

  getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, getProductDto] = GetProductDto.get({ product_id: +id });

    if (error) return res.status(400).json({ error });

    this.productService
      .getProductById(getProductDto!)
      .then((productFound) => res.status(200).json(productFound))
      .catch((error) => this.handleError(error, res));
  };

  createProduct = async (req: Request, res: Response) => {
    const [error, createProductDto] = CreateProductDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.productService
      .createProduct(createProductDto!)
      .then((newProduct) => res.status(200).json(newProduct))
      .catch((error) => this.handleError(error, res));
  };

  updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateProductDto] = UpdateProductDto.update({
      ...req.body,
      product_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.productService
      .updateProduct(updateProductDto!)
      .then((updatedProduct) => res.status(200).json(updatedProduct))
      .catch((error) => this.handleError(error, res));
  };

  deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, deleteProductDto] = DeleteProductDto.delete({
      product_id: +id,
    });

    this.productService
      .deleteProduct(deleteProductDto!)
      .then((deletedProduct) => res.status(200).json(deletedProduct))
      .catch((error) => this.handleError(error, res));
  };
}
