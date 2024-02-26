import { JWTAdapter } from "../../config";
import { prisma } from "../../data/postgres";
import { LoginUserDto, UserIdDto, CustomError } from "../../domain";

export class AuthService {
  constructor() {}

  async loginUser(loginUserDto: LoginUserDto) {
    const userExists = await this.validateUserExistence(loginUserDto.email);

    if (userExists.password !== loginUserDto.password)
      throw CustomError.badRequest("Email or password are wrong");

    const token = await JWTAdapter.generateToken({
      user_id: userExists.user_id,
    });
    if (!token) throw CustomError.internalServer("Error while creating JWT");

    return { access_token: token };
  }

  async getCurrentSession(userIdDto: UserIdDto) {
    const currentUserLogged = await prisma.user.findFirst({
      where: {
        user_id: userIdDto.user_id,
      },
    });

    if (!currentUserLogged)
      throw CustomError.notFound(
        "User not found. Verify the credentials provided"
      );

    return { ...currentUserLogged };
  }

  private async validateUserExistence(user_email: string) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: user_email,
      },
    });

    if (!userExists) throw CustomError.notFound("Email or password are wrong");

    return userExists;
  }
}
