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
    const users = await prisma.users.findMany();
    return users;
  }

  async getUserById(userIdDto: UserIdDto) {
    const { user_id } = userIdDto;

    const userFound = await prisma.users.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (!userFound) throw CustomError.notFound("User not found");

    return userFound;
  }

  async createUser(createUserDto: CreateUserDto) {
    const { fullname, email, password, avatar } = createUserDto;

    try {
      const newUser = await prisma.users.create({
        data: {
          fullname,
          email,
          password,
          avatar,
        },
      });

      return newUser;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const { user_id, fullname, email, password, avatar } = updateUserDto;

    const userExists = await prisma.users.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (!userExists) throw CustomError.notFound("User not found");

    try {
      const updatedUser = await prisma.users.update({
        where: {
          user_id: user_id,
        },
        data: {
          fullname,
          email,
          password,
          avatar,
        },
      });

      return updatedUser;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteUser(userIdDto: UserIdDto) {
    const { user_id } = userIdDto;

    const userExists = await prisma.users.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (!userExists) throw CustomError.notFound("User not found");

    try {
      await prisma.users.delete({
        where: { user_id: user_id },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }
}
