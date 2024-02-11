import {
  CategoryIdDto,
  CreateCategoryDto,
  UpdateCategoryDto,
  CustomError,
} from "../../domain";
import { prisma } from "../../data/postgres";

export class CategoryService {
  constructor() {}

  async getCategories() {
    const categories = await prisma.categories.findMany();
    return categories;
  }

  async getCategoryById(categoryIdDto: CategoryIdDto) {
    const { category_id } = categoryIdDto;

    const categoryFound = await prisma.categories.findFirst({
      where: {
        category_id: category_id,
      },
    });

    if (!categoryFound) throw CustomError.notFound("Category not found");

    return categoryFound;
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;

    try {
      const newCategory = await prisma.categories.create({
        data: {
          name: name,
        },
      });

      return newCategory;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateCategory(updateCategoryDto: UpdateCategoryDto) {
    const { category_id, name } = updateCategoryDto;

    const categoryExists = await prisma.categories.findFirst({
      where: {
        category_id: category_id,
      },
    });

    if (!categoryExists) throw CustomError.notFound("Category not found");

    try {
      const updatedCategory = await prisma.categories.update({
        where: {
          category_id: category_id,
        },
        data: {
          name: name,
        },
      });

      return updatedCategory;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteCategory(categoryIdDto: CategoryIdDto) {
    const { category_id } = categoryIdDto;

    const categoryExists = await prisma.categories.findFirst({
      where: {
        category_id: category_id,
      },
    });

    if (!categoryExists) throw CustomError.notFound("Category not found");

    try {
      await prisma.categories.delete({
        where: { category_id: category_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
