import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { buildBaseUrl } from '../../modules/shared/utils/base-url.builder';
import { buildPagination } from '../../modules/shared/utils/pagination.builder';
import { CheckEmailDto } from '../../modules/users/dtos/check-email.dto';
import { PaginationDto } from '../../modules/shared/dtos/pagination.dto';
import { ResourceType } from '../../modules/shared/interfaces/enums';
import { UpdateUserDto } from '../../modules/users/dtos/update-user.dto';
import { User } from '../../modules/users/entities/user.entity';
import { UsersRepository } from '../../modules/users/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUsers(paginationDto: PaginationDto): Promise<{ prev: string | null; next: string | null; users: User[] }> {
    const { total, users } = await this.usersRepository.findAll(paginationDto);

    const baseUrl = buildBaseUrl(ResourceType.USERS);
    const { prev, next } = buildPagination(paginationDto, total, baseUrl);

    return { prev, next, users };
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) throw new NotFoundException(`User with id "${id}" not found`);

    return user;
  }

  async checkUserEmail(checkEmailDto: CheckEmailDto): Promise<{ isAvailable: boolean }> {
    const user = await this.usersRepository.findByEmail(checkEmailDto.email);
    return { isAvailable: !user };
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(id);

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const userExists = await this.usersRepository.findByEmail(updateUserDto.email);
      if (userExists) throw new BadRequestException('Email already registered');
    }

    return this.usersRepository.update(id, { ...updateUserDto, email: updateUserDto.email?.toLowerCase().trim() });
  }
}
