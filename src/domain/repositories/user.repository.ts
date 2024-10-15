import { PaginationDto, UpdateUserDto, UserEntity, UserIdDto, UsersData, UserWithReviews } from '..';

export abstract class UserRepository {
  abstract getUsers(paginationDto: PaginationDto): Promise<UsersData>;
  abstract getUserById(userIdDto: UserIdDto): Promise<UserEntity>;
  abstract getReviewsByUser(userIdDto: UserIdDto, paginationDto: PaginationDto): Promise<UserWithReviews>;
  abstract updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}
