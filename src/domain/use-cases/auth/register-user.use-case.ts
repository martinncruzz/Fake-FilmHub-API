import { RegisterUserDto } from '../../../application';
import { UserEntity } from '../..';

export type RegisterUserUseCaseResp = Promise<UserEntity>;

export interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserDto): RegisterUserUseCaseResp;
}
