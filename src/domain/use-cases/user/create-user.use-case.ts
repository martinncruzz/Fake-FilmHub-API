import { CreateUserDto, UserEntity, UserRepository } from "../..";

interface CreateUserUseCase {
  execute(createUserDto: CreateUserDto): Promise<UserEntity>;
}

export class CreateUser implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.createUser(createUserDto);
    return user;
  }
}
