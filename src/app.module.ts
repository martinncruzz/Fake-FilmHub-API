import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { GenresModule } from './modules/genres/genres.module';
import { MoviesModule } from './modules/movies/movies.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, AuthModule, GenresModule, MoviesModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
