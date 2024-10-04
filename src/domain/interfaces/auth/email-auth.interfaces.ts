import { CheckUserEmailDto } from '../..';

export type IsEmailAvailableUseCaseResp = Promise<{
  isAvailable: boolean;
}>;

export interface IsEmailAvailableUseCase {
  execute(checkUserEmailDto: CheckUserEmailDto): IsEmailAvailableUseCaseResp;
}
