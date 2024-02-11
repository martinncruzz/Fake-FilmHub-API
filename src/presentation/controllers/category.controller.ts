import { Request, Response } from "express";
import { CategoryService } from "../services";
import {
  CategoryIdDto,
  CreateCategoryDto,
  UpdateCategoryDto,
  CustomError,
} from "../../domain";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json({ error: error.message });

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getCategories = async (req: Request, res: Response) => {
    this.categoryService
      .getCategories()
      .then((categories) => res.status(200).json(categories))
      .catch((error) => this.handleError(error, res));
  };

  getCategoryById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, categoryIdDto] = CategoryIdDto.get({ category_id: +id });

    if (error) return res.status(400).json({ error });

    this.categoryService
      .getCategoryById(categoryIdDto!)
      .then((categoryFound) => res.status(200).json(categoryFound))
      .catch((error) => this.handleError(error, res));
  };

  createCategory = async (req: Request, res: Response) => {
    const [error, createCategoryDto] = CreateCategoryDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.categoryService
      .createCategory(createCategoryDto!)
      .then((newCategory) => res.status(200).json(newCategory))
      .catch((error) => this.handleError(error, res));
  };

  updateCategory = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, updateCategoryDto] = UpdateCategoryDto.update({
      ...req.body,
      category_id: +id,
    });

    if (error) return res.status(400).json({ error });

    this.categoryService
      .updateCategory(updateCategoryDto!)
      .then((updatedCategory) => res.status(200).json(updatedCategory))
      .catch((error) => this.handleError(error, res));
  };

  deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, categoryIdDto] = CategoryIdDto.get({ category_id: +id });

    if (error) return res.status(400).json({ error });

    this.categoryService
      .deleteCategory(categoryIdDto!)
      .then((deletedCategory) => res.status(200).json(deletedCategory))
      .catch((error) => this.handleError(error, res));
  };
}
