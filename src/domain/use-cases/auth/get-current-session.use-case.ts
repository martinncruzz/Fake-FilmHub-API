import { UserEntity } from "../..";

interface GetCurrentSessionUseCase {
  execute(user: UserEntity): UserEntity;
}

export class GetCurrentSession implements GetCurrentSessionUseCase {
  execute(user: UserEntity): UserEntity {
    return user;
  }
}
