import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  fullname?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
