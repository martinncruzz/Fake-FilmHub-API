import { UserIdDto } from '../../../application';
import { UserEntity } from '../..';

export type GetUserByIdUseCaseResp = Promise<UserEntity>;

export interface GetUserByIdUseCase {
  execute(userIdDto: UserIdDto): GetUserByIdUseCaseResp;
}
