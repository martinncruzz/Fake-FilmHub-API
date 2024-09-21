import { UserMapper } from "..";
import { prisma } from "../../data/postgres";
import {
  AuthDatasource,
  CheckUserEmailDto,
  CustomError,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
  UserRole,
} from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const isEmailAvailable = await this.isEmailAvailable({
      email: registerUserDto.email,
    });

    if (!isEmailAvailable)
      throw CustomError.badRequest("This email is already registered");

    const newUser = await prisma.user.create({
      data: {
        ...registerUserDto,
        role: UserRole.user,
      },
    });

    return UserMapper.userEntityFromObject(newUser);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user || user.password !== password)
      throw CustomError.badRequest("Invalid credentials");

    return UserMapper.userEntityFromObject(user);
  }

  async isEmailAvailable(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<boolean> {
    const userRegistered = await prisma.user.findFirst({
      where: {
        email: { equals: checkUserEmailDto.email, mode: "insensitive" },
      },
    });

    return !userRegistered;
  }
}
