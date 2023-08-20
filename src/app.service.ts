import { Injectable } from '@nestjs/common';
import User from './entities/user.entity';
import Tweet from './entities/tweet.entity';
import { SignUpUserDto } from './dtos/user.dto';
import { PostTweet } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  getHello(): string {
    return 'Hello World!';
  }

  signUp(body: SignUpUserDto) {
    this.users.push(new User(body.username, body.avatar));
  }

  postTweet(body: PostTweet) {
    // A propriedade username de user é privada, para isso devemos criar um getter
    const userExists = this.users.find((user) => {
      user.username === body.username;
    });
    if (!userExists) {
      throw { message: 'User not found' };
    }
    this.tweets.push(new Tweet(userExists, body.tweet));
  }

  getTweets(page?: number) {
    const orderedTweets = this.tweets.reverse();
    if (page) {
      return this.tweets.slice((page - 1) * 15, page * 15);
    }
    return orderedTweets.slice(0, 15);
  }

  getUserTweets(username: string) {
    const filteredTweets = this.tweets.filter((tweet) => {
      return tweet.user.username === username;
    });
    return filteredTweets;
  }
}
