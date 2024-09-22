import { userSchema, ZodAdapter } from "../../config";
import { CustomError, UserEntity } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: Record<string, any>): UserEntity {
    const [errors, parsedData] = ZodAdapter.validate(userSchema, object);

    if (errors) throw CustomError.internalServer("Error processing user data");

    const { user_id, fullname, email, password, avatar, role } = parsedData!;

    return new UserEntity(user_id, fullname, email, password, avatar, role);
  }
}
