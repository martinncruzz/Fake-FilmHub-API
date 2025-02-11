import { PartialType } from '@nestjs/mapped-types';

import { CreateGenreDto } from '@modules/genres/dtos/create-genre.dto';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {}
