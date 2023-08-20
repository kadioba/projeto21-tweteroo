import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}
