import { PaginationDto, UpdateUserDto, UserEntity, UserIdDto } from "..";

export abstract class UserDatasource {
  abstract getUsers(paginationDto: PaginationDto): Promise<UserEntity[]>;
  abstract getUserById(userIdDto: UserIdDto): Promise<UserEntity>;
  abstract updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}
