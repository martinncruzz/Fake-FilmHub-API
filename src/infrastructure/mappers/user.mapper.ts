import { CustomError, UserEntity } from '../../domain';
import { userSchema, ZodAdapter } from '..';

export class UserMapper {
  static userEntityFromObject(object: Record<string, any>): UserEntity {
    const { errors, validatedData } = ZodAdapter.validate(userSchema, object);

    if (errors) throw CustomError.internalServer('Error processing user data');

    const { user_id, fullname, email, password, avatar, role, reviews } = validatedData!;

    return new UserEntity(user_id, fullname, email, password, avatar, role, reviews);
  }
}
