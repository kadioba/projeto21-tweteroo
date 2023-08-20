import User from './user.entity';

export default class Tweet {
  private _user: User;
  private tweet: string;

  constructor(user: User, tweet: string) {
    this._user = user;
    this.tweet = tweet;
  }

  get user() {
    return this._user;
  }
}
