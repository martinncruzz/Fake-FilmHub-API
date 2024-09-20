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
    const isAvailable = await this.checkEmailAvailability({
      email: registerUserDto.email,
    });

    if (!isAvailable)
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

    if (!user) throw CustomError.badRequest("Invalid credentials");
    if (user.password !== password)
      throw CustomError.badRequest("Invalid credentials");

    return UserMapper.userEntityFromObject(user);
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
}
