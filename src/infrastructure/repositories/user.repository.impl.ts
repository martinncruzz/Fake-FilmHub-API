import {
  PaginationDto,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
  UserIdDto,
  UserRepository,
  UsersData,
} from '../../domain';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}

  getUsers(paginationDto: PaginationDto): Promise<UsersData> {
    return this.userDatasource.getUsers(paginationDto);
  }

  getUserById(userIdDto: UserIdDto): Promise<UserEntity> {
    return this.userDatasource.getUserById(userIdDto);
  }

  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userDatasource.updateUser(updateUserDto);
  }
}
