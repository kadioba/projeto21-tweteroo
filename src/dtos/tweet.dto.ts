import { IsNotEmpty, IsString } from 'class-validator';

export class PostTweet {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  tweet: string;
}
