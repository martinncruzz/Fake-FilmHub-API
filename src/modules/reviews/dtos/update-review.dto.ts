import { IsString, Min, Max, IsInt, MinLength, IsOptional, Validate } from 'class-validator';

import { RatingOrCommentConstraint } from '@config/constraints/rating-or-comment.constraint';

export class UpdateReviewDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsString()
  @MinLength(2)
  comment?: string;

  @Validate(RatingOrCommentConstraint)
  validateRatingOrComment: boolean;
}
