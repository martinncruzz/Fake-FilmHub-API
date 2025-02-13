import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';

import { Auth } from '../../modules/auth/decorators/auth.decorator';
import { CreateReviewDto } from '../../modules/reviews/dtos/create-review.dto';
import { GetUser } from '../../modules/auth/decorators/get-user.decorator';
import { PaginationDto } from '../../modules/shared/dtos/pagination.dto';
import { ReviewsService } from '../../modules/reviews/reviews.service';
import { UpdateReviewDto } from '../../modules/reviews/dtos/update-review.dto';
import { User } from '../../modules/users/entities/user.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews(@Query() paginationDto: PaginationDto) {
    return this.reviewsService.getReviews(paginationDto);
  }

  @Get(':id')
  getReviewById(@Param('id', ParseUUIDPipe) id: string) {
    return this.reviewsService.getReviewById(id);
  }

  @Post()
  @Auth()
  createReview(@Body() createReviewDto: CreateReviewDto, @GetUser() currentUser: User) {
    return this.reviewsService.createReview(createReviewDto, currentUser.id);
  }

  @Patch(':id')
  @Auth()
  updateReview(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReviewDto: UpdateReviewDto,
    @GetUser() currentUser: User,
  ) {
    return this.reviewsService.updateReview(id, updateReviewDto, currentUser);
  }

  @Delete(':id')
  @Auth()
  deleteReview(@Param('id', ParseUUIDPipe) id: string, @GetUser() currentUser: User) {
    return this.reviewsService.deleteReview(id, currentUser);
  }
}
