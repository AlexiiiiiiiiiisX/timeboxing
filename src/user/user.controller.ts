import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  async createUser(@Body() data: { name: string; email: string; password: string; start_time: string; end_time: string; status: number }) {
    return this.userService.createUser(data);
  }
}
