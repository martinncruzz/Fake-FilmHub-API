import { Module } from '@nestjs/common';

import { ReviewsModule } from '../../modules/reviews/reviews.module';
import { UsersController } from '../../modules/users/users.controller';
import { UsersRepository } from '../../modules/users/repositories/users.repository';
import { UsersRepositoryImpl } from '../../modules/users/repositories/users.repository.impl';
import { UsersService } from '../../modules/users/users.service';

@Module({
  imports: [ReviewsModule],
  controllers: [UsersController],
  providers: [UsersService, { provide: UsersRepository, useClass: UsersRepositoryImpl }],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
