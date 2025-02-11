import { IsString, IsUrl, MinLength } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsUrl()
  imageUrl: string;
}
