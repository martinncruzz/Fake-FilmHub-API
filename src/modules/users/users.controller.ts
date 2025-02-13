import { Controller, Get, Body, Patch, Param, ParseUUIDPipe, Query, Post } from '@nestjs/common';

import { CheckEmailDto } from '../../modules/users/dtos/check-email.dto';
import { PaginationDto } from '../../modules/shared/dtos/pagination.dto';
import { ReviewsService } from '../../modules/reviews/reviews.service';
import { UpdateUserDto } from '../../modules/users/dtos/update-user.dto';
import { UsersService } from '../../modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly reviewsService: ReviewsService,
  ) {}

  @Get()
  getUsers(@Query() paginationDto: PaginationDto) {
    return this.usersService.getUsers(paginationDto);
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getUserById(id);
  }

  @Get(':id/reviews')
  getReviewsByUserId(@Param('id', ParseUUIDPipe) id: string, @Query() paginationDto: PaginationDto) {
    return this.reviewsService.getReviewsByUserId(id, paginationDto);
  }

  @Post('check-email')
  checkUserEmail(@Body() checkEmailDto: CheckEmailDto) {
    return this.usersService.checkUserEmail(checkEmailDto);
  }

  @Patch(':id')
  updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
