import { LoginUserDto } from '../../../application';

export type LoginUserUseCaseResp = Promise<{ access_token: string }>;

export interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): LoginUserUseCaseResp;
}
