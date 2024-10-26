import { UserEntity } from '../..';

export interface UsersData {
  total: number;
  users: UserEntity[];
}

export interface UserWithReviews {
  totalReviews: number;
  user: UserEntity;
}
