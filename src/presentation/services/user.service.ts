import { UserRole } from "@prisma/client";
import { prisma } from "../../data/postgres";
import {
  CreateUserDto,
  UpdateUserDto,
  UserIdDto,
  CheckUserEmailDto,
  PaginationDto,
  CustomError,
} from "../../domain";

export class UserService {
  constructor() {}

  async getUsers(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return users;
  }

  async getUserById(userIdDto: UserIdDto) {
    const userFound = await this.validateUserExistence(userIdDto.user_id);
    return userFound;
  }

  async createUser(createUserDto: CreateUserDto) {
    const isAvailable = await this.validateEmailExistence(createUserDto.email);

    if (!isAvailable)
      throw CustomError.badRequest("This email is already registered");

    try {
      const newUser = await prisma.user.create({
        data: {
          ...createUserDto,
          role: UserRole.user,
        },
      });

      return newUser;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async checkEmail(checkUserEmailDto: CheckUserEmailDto) {
    const isAvailable = await this.validateEmailExistence(
      checkUserEmailDto.email
    );

    return { isAvailable };
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const { user_id, ...updateUserDtoData } = updateUserDto;

    const userExists = await this.validateUserExistence(user_id);

    if (
      updateUserDto.email &&
      updateUserDto.email.toLowerCase() !== userExists.email.toLowerCase()
    ) {
      const isAvailable = await this.validateEmailExistence(
        updateUserDto.email
      );

      if (!isAvailable)
        throw CustomError.badRequest("This email is already registered");
    }

    try {
      const updatedUser = await prisma.user.update({
        where: {
          user_id: user_id,
        },
        data: updateUserDtoData,
      });

      return updatedUser;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  private async validateUserExistence(user_id: number) {
    const userExists = await prisma.user.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (!userExists) throw CustomError.notFound("User not found");

    return userExists;
  }

  private async validateEmailExistence(user_email: string) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: user_email,
          mode: "insensitive",
        },
      },
    });

    if (userExists) return false;

    return true;
  }
}
