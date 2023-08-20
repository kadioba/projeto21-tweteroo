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
    const orderedTweets = this.tweets.reverse();
    const selectedTweets = page
      ? orderedTweets.slice((page - 1) * 15, page * 15)
      : orderedTweets.slice(0, 15);
    const refinedTweets = selectedTweets.map((tweet) => {
      return {
        username: tweet.user.username,
        avatar: tweet.user.avatar,
        tweet: tweet.tweet,
      };
    });
    return refinedTweets;
  }

  getUserTweets(username: string) {
    const filteredTweets = this.tweets.filter((tweet) => {
      return tweet.user.username === username;
    });
    const refinedTweets = filteredTweets.map((tweet) => {
      return {
        username: tweet.user.username,
        avatar: tweet.user.avatar,
        tweet: tweet.tweet,
      };
    });
    return refinedTweets;
  }
}
