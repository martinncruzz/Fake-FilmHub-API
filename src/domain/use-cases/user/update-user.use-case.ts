import { UpdateUserDto } from '../../../application';
import { UserEntity } from '../..';

export type UpdateUserUseCaseResp = Promise<UserEntity>;

export interface UpdateUserUseCase {
  execute(updateUserDto: UpdateUserDto): UpdateUserUseCaseResp;
}
