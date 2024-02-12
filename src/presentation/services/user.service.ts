import { UserRole } from "@prisma/client";
import { prisma } from "../../data/postgres";
import {
  CreateUserDto,
  UpdateUserDto,
  UserIdDto,
  CustomError,
} from "../../domain";

export class UserService {
  constructor() {}

  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUserById(userIdDto: UserIdDto) {
    const userFound = await prisma.user.findFirst({
      where: {
        user_id: userIdDto.user_id,
      },
    });

    if (!userFound) throw CustomError.notFound("User not found");

    return userFound;
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = await prisma.user.create({
        data: {
          role: UserRole.user,
          ...createUserDto,
        },
      });

      return newUser;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const { user_id, ...updateUserDtoData } = updateUserDto;

    const userExists = await prisma.user.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (!userExists) throw CustomError.notFound("User not found");

    try {
      const updatedUser = await prisma.user.update({
        where: {
          user_id: user_id,
        },
        data: updateUserDtoData,
      });

      return updatedUser;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteUser(userIdDto: UserIdDto) {
    const userExists = await prisma.user.findFirst({
      where: {
        user_id: userIdDto.user_id,
      },
    });

    if (!userExists) throw CustomError.notFound("User not found");

    try {
      await prisma.user.delete({
        where: { user_id: userIdDto.user_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
