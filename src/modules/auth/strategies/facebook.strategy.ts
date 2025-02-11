import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

import { AuthService } from '@modules/auth/auth.service';
import { envs } from '@config/adapters/envs.adapter';
import { User } from '@modules/users/entities/user.entity';
import { UsersRepository } from '@modules/users/repositories/users.repository';

interface FacebookProfile {
  _json: {
    name: string;
    email: string;
    picture: { data: { url: string } };
  };
}

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: envs.FACEBOOK_CLIENT_ID,
      clientSecret: envs.FACEBOOK_CLIENT_SECRET,
      callbackURL: envs.FACEBOOK_CALLBACK_URL,
      profileFields: ['displayName', 'email', 'photos'],
    });
  }

  async validate(_accessToken: string, _refreshToken: string, profile: FacebookProfile): Promise<User> {
    const { name, email, picture } = profile._json;

    let user = await this.usersRepository.findByEmail(email);

    if (!user) {
      user = await this.authService.registerUser({
        fullname: name,
        email,
        avatarUrl: picture.data.url,
        password: envs.OAUTH_DEFAULT_PASSWORD,
      });
    } else {
      user = await this.usersRepository.update(user.id, { fullname: name, avatarUrl: picture.data.url });
    }

    return user;
  }
}
