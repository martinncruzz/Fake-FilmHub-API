import { forwardRef, Module } from '@nestjs/common';

import { GenresModule } from '@modules/genres/genres.module';
import { MovieGenresRepository } from '@modules/movies/repositories/movie-genres.repository';
import { MovieGenresRepositoryImpl } from '@modules/movies/repositories/movie-genres.repository.impl';
import { MoviesController } from '@modules/movies/movies.controller';
import { MoviesRepository } from '@modules/movies/repositories/movies.repository';
import { MoviesRepositoryImpl } from '@modules/movies/repositories/movies.repository.impl';
import { MoviesService } from '@modules/movies/movies.service';
import { ReviewsModule } from '@modules/reviews/reviews.module';

@Module({
  imports: [forwardRef(() => GenresModule), forwardRef(() => ReviewsModule)],
  controllers: [MoviesController],
  providers: [
    MoviesService,
    { provide: MoviesRepository, useClass: MoviesRepositoryImpl },
    { provide: MovieGenresRepository, useClass: MovieGenresRepositoryImpl },
  ],
  exports: [MoviesService, MoviesRepository, MovieGenresRepository],
})
export class MoviesModule {}
