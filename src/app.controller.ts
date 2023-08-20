import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpUserDto } from './dtos/user.dto';
import { PostTweet } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sign-up')
  signUp(@Body() body: SignUpUserDto) {
    return this.appService.signUp(body);
  }

  @Post('/tweets')
  postTweet(@Body() body: PostTweet) {
    try {
      return this.appService.postTweet(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('/tweets')
  getTweets(@Query('page') page?: number) {
    if (page && page < 1) {
      throw new HttpException(
        'Informe uma página válida!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.appService.getTweets(page);
  }
}
