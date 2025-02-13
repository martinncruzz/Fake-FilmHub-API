import { forwardRef, Module } from '@nestjs/common';

import { MoviesModule } from '../../modules/movies/movies.module';
import { ReviewsController } from '../../modules/reviews/reviews.controller';
import { ReviewsRepository } from '../../modules/reviews/repositories/reviews.repository';
import { ReviewsRepositoryImpl } from '../../modules/reviews/repositories/reviews.repository.impl';
import { ReviewsService } from '../../modules/reviews/reviews.service';

@Module({
  imports: [forwardRef(() => MoviesModule)],
  controllers: [ReviewsController],
  providers: [ReviewsService, { provide: ReviewsRepository, useClass: ReviewsRepositoryImpl }],
  exports: [ReviewsService, ReviewsRepository],
})
export class ReviewsModule {}
