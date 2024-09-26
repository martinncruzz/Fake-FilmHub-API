import { UserEntity } from "../..";

export type GetCurrentSessionUseCaseResp = UserEntity;

export interface GetCurrentSessionUseCase {
  execute(user: UserEntity): GetCurrentSessionUseCaseResp;
}
