import {
  CheckUserEmailDto,
  CreateUserDto,
  PaginationDto,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
  UserIdDto,
  UserRepository,
} from "../../domain";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}

  getUsers(paginationDto: PaginationDto): Promise<UserEntity[]> {
    return this.userDatasource.getUsers(paginationDto);
  }
  getUserById(userIdDto: UserIdDto): Promise<UserEntity> {
    return this.userDatasource.getUserById(userIdDto);
  }
  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userDatasource.createUser(createUserDto);
  }
  checkEmailAvailability(
    checkUserEmailDto: CheckUserEmailDto
  ): Promise<boolean> {
    return this.userDatasource.checkEmailAvailability(checkUserEmailDto);
  }
  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userDatasource.updateUser(updateUserDto);
  }
}
