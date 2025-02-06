import { ArrayMinSize, IsArray, IsInt, IsString, IsUrl, IsUUID, Max, Min, MinLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  @MinLength(10)
  description: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @IsString()
  @MinLength(2)
  director: string;

  @IsInt()
  @Min(30)
  @Max(720)
  durationMinutes: number;

  @IsUrl()
  trailerLink: string;

  @IsUrl()
  posterImageUrl: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  genreIds: string[];
}
