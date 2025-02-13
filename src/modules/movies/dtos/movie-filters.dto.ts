import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsUUID, Max, Min, MinLength, Validate } from 'class-validator';

import { PaginationDto } from '../../../modules/shared/dtos/pagination.dto';
import { ReleaseYearRangeConstraint } from '../../../config/constraints/release-year-range.constraint';

export class MovieFiltersDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  @Validate(ReleaseYearRangeConstraint)
  releaseYear?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  @Validate(ReleaseYearRangeConstraint)
  minReleaseYear?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  @Validate(ReleaseYearRangeConstraint)
  maxReleaseYear?: number;

  @IsOptional()
  @IsUUID()
  genreId?: string;
}
