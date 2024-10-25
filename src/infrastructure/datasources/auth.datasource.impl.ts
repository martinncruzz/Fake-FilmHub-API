import { prisma } from '../../data';
import { AuthRepository, CustomError, UserEntity, UserRole } from '../../domain';
import { CheckUserEmailDto, LoginUserDto, RegisterUserDto } from '../../application';
import { UserMapper } from '..';

export class AuthDatasourceImpl implements AuthRepository {
  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const isEmailAvailable = await this.isEmailAvailable({ email: registerUserDto.email });

    if (!isEmailAvailable) throw CustomError.badRequest('This email is already registered');

    const newUser = await prisma.userModel.create({ data: { ...registerUserDto, role: UserRole.USER } });

    return UserMapper.userEntityFromObject(newUser);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    const user = await prisma.userModel.findFirst({ where: { email } });

    if (!user || user.password !== password) throw CustomError.badRequest('Invalid credentials');

    return UserMapper.userEntityFromObject(user);
  }

  async isEmailAvailable(checkUserEmailDto: CheckUserEmailDto): Promise<boolean> {
    const userRegistered = await prisma.userModel.findFirst({
      where: { email: { equals: checkUserEmailDto.email, mode: 'insensitive' } },
    });

    return !userRegistered;
  }
}
