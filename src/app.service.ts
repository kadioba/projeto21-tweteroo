import { Injectable } from '@nestjs/common';
import User from './entities/user.entity';
import Tweet from './entities/tweet.entity';
import { SignUpUserDto } from './dtos/user.dto';
import { PostTweet } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[] = [];
  private tweets: Tweet[] = [];

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(body: SignUpUserDto) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  postTweet(body: PostTweet) {
    // A propriedade username de user é privada, para isso devemos criar um getter
    const userExists = this.users.find((user) => {
      return user.username === body.username;
    });
    if (!userExists) {
      throw { message: 'User not found' };
    }
    this.tweets.push(new Tweet(userExists, body.tweet));
  }

  getTweets(page?: number) {
    return this.tweets
      .reverse()
      .slice((page ? page - 1 : 0) * 15, page ? page * 15 : 15)
      .map((tweet) => ({
        username: tweet.user.username,
        avatar: tweet.user.avatar,
        tweet: tweet.tweet,
      }));
  }

  getUserTweets(username: string) {
    return this.tweets
      .reverse()
      .filter((tweet) => tweet.user.username === username)
      .map((tweet) => ({
        username: tweet.user.username,
        avatar: tweet.user.avatar,
        tweet: tweet.tweet,
      }));
  }
}
