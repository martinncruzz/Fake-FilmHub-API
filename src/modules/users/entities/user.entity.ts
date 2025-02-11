import { InternalServerErrorException } from '@nestjs/common';

import { Review } from '@modules/reviews/entities/review.entity';
import { UserRole } from '@modules/shared/interfaces/enums';
import { UserSchema } from '@config/schemas/user.schema';
import { ValidatorAdapter } from '@config/adapters/validator.adapter';

export class User {
  constructor(
    public readonly id: string,
    public readonly fullname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly avatarUrl: string,
    public readonly role: UserRole,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly reviews?: Partial<Review>[],
  ) {}

  static fromObject(object: Record<string, any>): User {
    const { success, data } = ValidatorAdapter.validate(object, UserSchema);

    if (!success) throw new InternalServerErrorException('Error processing user data');

    return new User(
      data.id,
      data.fullname,
      data.email,
      data.password,
      data.avatarUrl,
      data.role,
      data.createdAt,
      data.updatedAt,
      data.reviews,
    );
  }
}
