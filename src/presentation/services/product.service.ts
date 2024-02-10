import {
  CreateProductDto,
  DeleteProductDto,
  GetProductDto,
  UpdateProductDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";

export class ProductService {
  constructor() {}

  async getProducts() {
    const products = await prisma.products.findMany();
    return products;
  }

  async getProductById(getProductDto: GetProductDto) {
    const { product_id } = getProductDto;

    const productFound = await prisma.products.findFirst({
      where: {
        product_id: product_id,
      },
    });

    if (!productFound) throw CustomError.notFound("Product not found");

    return productFound;
  }

  async createProduct(createProductDto: CreateProductDto) {
    const { name, description, price, stock_quantity } = createProductDto;

    try {
      const newProduct = await prisma.products.create({
        data: {
          name,
          description,
          price,
          stock_quantity,
        },
      });

      return newProduct;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    const { product_id, name, description, price, stock_quantity } =
      updateProductDto;

    const productExists = await prisma.products.findFirst({
      where: {
        product_id: product_id,
      },
    });

    if (!productExists) throw CustomError.notFound("Product not found");

    try {
      const updatedProduct = await prisma.products.update({
        where: {
          product_id: product_id,
        },
        data: {
          name,
          description,
          price,
          stock_quantity,
        },
      });

      return updatedProduct;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteProduct(deleteProductDto: DeleteProductDto) {
    const { product_id } = deleteProductDto;

    const productExists = await prisma.products.findFirst({
      where: {
        product_id: product_id,
      },
    });

    if (!productExists) throw CustomError.notFound("Product not found");

    try {
      await prisma.products.delete({
        where: { product_id: product_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
