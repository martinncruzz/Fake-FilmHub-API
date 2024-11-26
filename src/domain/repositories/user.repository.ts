import { CheckUserEmailDto, PaginationDto, UpdateUserDto, UserIdDto } from '../../application';
import { UserEntity, UsersData, UserWithReviews } from '..';

export abstract class UserRepository {
  abstract getUsers(paginationDto: PaginationDto): Promise<UsersData>;
  abstract getUserById(userIdDto: UserIdDto): Promise<UserEntity>;
  abstract getUserByEmail(checkUserEmailDto: CheckUserEmailDto): Promise<UserEntity | null>;
  abstract getReviewsByUser(userIdDto: UserIdDto, paginationDto: PaginationDto): Promise<UserWithReviews>;
  abstract updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}
