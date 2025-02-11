import { PartialType } from '@nestjs/mapped-types';

import { CreateMovieDto } from '@modules/movies/dtos/create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
