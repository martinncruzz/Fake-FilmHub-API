import { UserRepository, UserEntity, UsersData, UserWithReviews, UserDatasource } from '../../domain';
import { PaginationDto, UpdateUserDto, UserIdDto } from '../../application';
import { UserDatasourceImpl } from '..';

export class UserRepositoryImpl implements UserRepository {
  private static _instance: UserRepositoryImpl;

  private constructor(private readonly userDatasource: UserDatasource) {}

  static get instance(): UserRepositoryImpl {
    if (!this._instance) {
      const userDatasource = UserDatasourceImpl.instance;
      this._instance = new UserRepositoryImpl(userDatasource);
    }

    return this._instance;
  }

  getUsers(paginationDto: PaginationDto): Promise<UsersData> {
    return this.userDatasource.getUsers(paginationDto);
  }

  getUserById(userIdDto: UserIdDto): Promise<UserEntity> {
    return this.userDatasource.getUserById(userIdDto);
  }

  getReviewsByUser(userIdDto: UserIdDto, paginationDto: PaginationDto): Promise<UserWithReviews> {
    return this.userDatasource.getReviewsByUser(userIdDto, paginationDto);
  }

  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userDatasource.updateUser(updateUserDto);
  }
}
