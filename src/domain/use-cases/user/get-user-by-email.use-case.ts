import { CheckUserEmailDto } from '../../../application';

export type GetUserByEmailUseCaseResp = Promise<{ isAvailable: boolean }>;

export interface GetUserByEmailUseCase {
  execute(checkUserEmailDto: CheckUserEmailDto): GetUserByEmailUseCaseResp;
}
