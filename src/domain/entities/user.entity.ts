import { PartialReviewEntity, UserRole } from '..';

export class UserEntity {
  constructor(
    public user_id: number,
    public fullname: string,
    public email: string,
    public password: string,
    public avatar: string,
    public role: UserRole,
    public reviews?: PartialReviewEntity[],
  ) {}
}
