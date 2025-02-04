import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

import { AuthService } from '@modules/auth/auth.service';
import { envs } from '@config/adapters/envs.adapter';
import { User } from '@modules/users/entities/user.entity';
import { UsersRepository } from '@modules/users/repositories/users.repository';

interface GoogleProfile {
  _json: {
    name: string;
    email: string;
    picture: string;
  };
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRET,
      callbackURL: envs.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
    });
  }

  async validate(_accessToken: string, _refreshToken: string, profile: GoogleProfile): Promise<User> {
    const { name, email, picture } = profile._json;

    let user = await this.usersRepository.findByEmail(email);

    if (!user) {
      user = await this.authService.registerUser({
        fullname: name,
        email,
        avatarUrl: picture,
        password: envs.OAUTH_DEFAULT_PASSWORD,
      });
    } else {
      user = await this.usersRepository.update(user.id, { fullname: name, avatarUrl: picture });
    }

    return user;
  }
}
