import {
  CheckUserEmailDto,
  CreateUserDto,
  PaginationDto,
  UpdateUserDto,
  UserEntity,
  UserIdDto,
} from "..";

export abstract class UserRepository {
  abstract getUsers(paginationDto: PaginationDto): Promise<UserEntity[]>;
  abstract getUserById(userIdDto: UserIdDto): Promise<UserEntity>;
  abstract createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
  abstract checkEmailAvailability(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<boolean>;
  abstract updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}
