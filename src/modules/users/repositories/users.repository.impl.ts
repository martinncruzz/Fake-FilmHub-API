import { Injectable } from '@nestjs/common';

import { PaginationDto } from '@modules/shared/dtos/pagination.dto';
import { PostgresDatabase } from '@database/postgres/postgres-database';
import { RegisterUserDto } from '@modules/auth/dtos/register-user.dto';
import { UpdateUserDto } from '@modules/users/dtos/update-user.dto';
import { User } from '@modules/users/entities/user.entity';
import { UserRole } from '@modules/shared/interfaces/enums';
import { UsersRepository } from '@modules/users/repositories/users.repository';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  private readonly prisma = PostgresDatabase.getClient();

  async findAll(paginationDto: PaginationDto): Promise<{ total: number; users: User[] }> {
    const { page, limit } = paginationDto;

    const [total, users] = await this.prisma.$transaction([
      this.prisma.user.count(),
      this.prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return { total, users: users.map(User.fromObject) };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? User.fromObject(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { email } });
    return user ? User.fromObject(user) : null;
  }

  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const createdUser = await this.prisma.user.create({ data: { ...registerUserDto, role: UserRole.USER } });
    return User.fromObject(createdUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.prisma.user.update({ where: { id }, data: updateUserDto });
    return User.fromObject(updatedUser);
  }
}
