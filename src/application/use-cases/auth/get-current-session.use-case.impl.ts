import { GetCurrentSessionUseCase, GetCurrentSessionUseCaseResp, UserEntity } from '../../../domain';

export class GetCurrentSessionUseCaseImpl implements GetCurrentSessionUseCase {
  execute(user: UserEntity): GetCurrentSessionUseCaseResp {
    return user;
  }
}
