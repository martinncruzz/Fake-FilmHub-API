import { CheckUserEmailDto } from '../../../application';

export type IsEmailAvailableUseCaseResp = Promise<{ isAvailable: boolean }>;

export interface IsEmailAvailableUseCase {
  execute(checkUserEmailDto: CheckUserEmailDto): IsEmailAvailableUseCaseResp;
}
