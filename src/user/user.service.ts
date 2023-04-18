import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [{ name: 'John Wick' }];
  getAllUser() {
    return this.users;
  }

  addUsers(user) {
    this.users.push(user);
    return 'Added successfully';
  }
  deleteUser() {
    this.users.pop();
    return 'Deleted last user';
  }
  getUser(name: string) {
    return this.users.filter((user) => user.name == name);
  }
}
