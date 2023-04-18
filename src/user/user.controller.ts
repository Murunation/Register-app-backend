import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller(`User`)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(`all`)
  getAllUser() {
    return this.userService.getAllUser();
  }
  // @Get(`add`)
  // addUsers() {
  //   return this.userService.addUsers({ name: 'Murun', age: 21 });
  // }
  @Get(`delete`)
  deleteUser() {
    return this.userService.deleteUser();
  }
  @Get(':name')
  getUser(@Param('name') name: string) {
    console.log('name: ' + name);
    return this.userService.getUser(name);
  }
  @Post('add')
  addUsers(@Body() body: any) {
    console.log('add users: ', body);
    return this.userService.addUsers(body);
  }
}
