import { UserEntity } from "../..";

interface GetCurrentSessionUseCase {
  execute(user: UserEntity): UserEntity;
}

export class GetCurrentSessionUseCaseImpl implements GetCurrentSessionUseCase {
  execute(user: UserEntity): UserEntity {
    return user;
  }
}
