import { forwardRef, Module } from '@nestjs/common';

import { GenresController } from '@modules/genres/genres.controller';
import { GenresRepository } from '@modules/genres/repositories/genres.repository';
import { GenresRepositoryImpl } from '@modules/genres/repositories/genres.repository.impl';
import { GenresService } from '@modules/genres/genres.service';
import { MoviesModule } from '@modules/movies/movies.module';

@Module({
  imports: [forwardRef(() => MoviesModule)],
  controllers: [GenresController],
  providers: [GenresService, { provide: GenresRepository, useClass: GenresRepositoryImpl }],
  exports: [GenresService, GenresRepository],
})
export class GenresModule {}
