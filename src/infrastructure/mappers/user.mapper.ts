import { CustomError, UserEntity } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: Record<string, any>): UserEntity {
    const { user_id, fullname, email, password, avatar, role } = object;

    if (!user_id) throw CustomError.badRequest("Missing user_id");
    if (!fullname) throw CustomError.badRequest("Missing fullname");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");
    if (!avatar) throw CustomError.badRequest("Missing avatar");
    if (!role) throw CustomError.badRequest("Missing role");

    return new UserEntity(user_id, fullname, email, password, avatar, role);
  }
}
