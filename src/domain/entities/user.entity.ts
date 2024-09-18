export enum UserRole {
  admin = "admin",
  user = "user",
}

export class UserEntity {
  constructor(
    public user_id: number,
    public fullname: string,
    public email: string,
    public password: string,
    public avatar: string,
    public role: UserRole
  ) {}

  static fromObject(object: Record<string, any>): UserEntity {
    const { user_id, fullname, email, password, avatar, role } = object;

    //TODO add validations in all fields, and change the record typing from any to unknown

    return new UserEntity(user_id, fullname, email, password, avatar, role);
  }
}
