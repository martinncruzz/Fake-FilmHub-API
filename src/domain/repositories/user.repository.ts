import {
  PaginationDto,
  UpdateUserDto,
  UserEntity,
  UserIdDto,
  UsersData,
} from "..";

export abstract class UserRepository {
  abstract getUsers(paginationDto: PaginationDto): Promise<UsersData>;
  abstract getUserById(userIdDto: UserIdDto): Promise<UserEntity>;
  abstract updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}
