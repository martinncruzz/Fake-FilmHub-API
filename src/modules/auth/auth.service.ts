import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from '@modules/auth/interfaces/jwt-payload.interface';
import { LoginUserDto } from '@modules/auth/dtos/login-user.dto';
import { RegisterUserDto } from '@modules/auth/dtos/register-user.dto';
import { User } from '@modules/users/entities/user.entity';
import { UsersRepository } from '@modules/users/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(registerUserDto.email);
    if (userExists) throw new BadRequestException('Email already registered');

    return this.usersRepository.create({ ...registerUserDto, email: registerUserDto.email.toLowerCase().trim() });
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    const { email, password } = loginUserDto;

    const user = await this.usersRepository.findByEmail(email);
    if (!user || user.password !== password) throw new BadRequestException('Invalid credentials');

    const payload: JwtPayload = { id: user.id };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  handleOAuthLogin(currentUser: User): { access_token: string } {
    const payload: JwtPayload = { id: currentUser.id };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  checkSession(currentUser: User): User {
    return currentUser;
  }
}
