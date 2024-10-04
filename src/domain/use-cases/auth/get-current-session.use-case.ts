import { GetCurrentSessionUseCase, GetCurrentSessionUseCaseResp, UserEntity } from '../..';

export class GetCurrentSessionUseCaseImpl implements GetCurrentSessionUseCase {
  execute(user: UserEntity): GetCurrentSessionUseCaseResp {
    return user;
  }
}
