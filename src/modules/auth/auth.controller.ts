import { Controller, Get, Post, Body } from '@nestjs/common';

import { Auth } from '../../modules/auth/decorators/auth.decorator';
import { AuthService } from '../../modules/auth/auth.service';
import { GetUser } from '../../modules/auth/decorators/get-user.decorator';
import { LoginUserDto } from '../../modules/auth/dtos/login-user.dto';
import { RegisterUserDto } from '../../modules/auth/dtos/register-user.dto';
import { User } from '../../modules/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto);
  }

  @Auth({ strategy: 'google' })
  @Get('google/redirect')
  redirectToGoogle() {}

  @Auth({ strategy: 'google' })
  @Get('google/callback')
  handleGoogleCallback(@GetUser() currentUser: User) {
    return this.authService.handleOAuthLogin(currentUser);
  }

  @Auth({ strategy: 'facebook' })
  @Get('facebook/redirect')
  redirectToFacebook() {}

  @Auth({ strategy: 'facebook' })
  @Get('facebook/callback')
  handleFacebookCallback(@GetUser() currentUser: User) {
    return this.authService.handleOAuthLogin(currentUser);
  }

  @Get('check-session')
  @Auth()
  checkSession(@GetUser() currentUser: User) {
    return this.authService.checkSession(currentUser);
  }
}
