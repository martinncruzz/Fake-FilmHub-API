import { UpdateUserDto, UserEntity } from '../..';

export type UpdateUserUseCaseResp = Promise<UserEntity>;

export interface UpdateUserUseCase {
  execute(updateUserDto: UpdateUserDto): UpdateUserUseCaseResp;
}
