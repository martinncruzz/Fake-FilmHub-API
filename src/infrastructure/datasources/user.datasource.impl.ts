import { UserMapper } from "..";
import { prisma } from "../../data/postgres";
import {
  CheckUserEmailDto,
  CreateUserDto,
  CustomError,
  PaginationDto,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
  UserIdDto,
  UserRole,
} from "../../domain";

export class UserDatasourceImpl implements UserDatasource {
  async getUsers(paginationDto: PaginationDto): Promise<UserEntity[]> {
    const { page, limit } = paginationDto;

    const users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return users.map(UserMapper.userEntityFromObject);
  }

  async getUserById(userIdDto: UserIdDto): Promise<UserEntity> {
    const user = await prisma.user.findFirst({
      where: {
        user_id: userIdDto.user_id,
      },
    });

    if (!user) throw CustomError.notFound("User not found");

    return UserMapper.userEntityFromObject(user);
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const isAvailable = await this.checkEmailAvailability({
      email: createUserDto.email,
    });

    if (!isAvailable)
      throw CustomError.badRequest("This email is already registered");

    const newUser = await prisma.user.create({
      data: {
        ...createUserDto,
        role: UserRole.user,
      },
    });

    return UserMapper.userEntityFromObject(newUser);
  }

  async checkEmailAvailability(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<boolean> {
    const userRegistered = await prisma.user.findFirst({
      where: {
        email: {
          equals: checkUserEmailDto.email,
          mode: "insensitive",
        },
      },
    });

    if (userRegistered) return false;

    return true;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const { user_id, ...updateUserDtoData } = updateUserDto;
    const userExists = await this.getUserById({ user_id });

    if (
      updateUserDto.email &&
      updateUserDto.email.toLowerCase() !== userExists.email.toLowerCase()
    ) {
      const isAvailable = await this.checkEmailAvailability({
        email: updateUserDto.email,
      });

      if (!isAvailable)
        throw CustomError.badRequest("This email is already registered");
    }

    const updatedUser = await prisma.user.update({
      where: {
        user_id: user_id,
      },
      data: updateUserDtoData,
    });

    return UserMapper.userEntityFromObject(updatedUser);
  }
}
