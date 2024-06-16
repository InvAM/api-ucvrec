import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  createUser(@Body() user: CreateUsersDto) {
    return this.userService.createUsers(user);
  }

  @Get()
  getUsers() {
    return this.userService.getUser();
  }

  @Get(':IDUser')
  getUsersOne(@Param('IDUser') IDUser: number): Promise<Users> {
    return this.userService.getUserOne(IDUser);
  }

  @Patch(':IDUser')
  updateUser(
    @Param('IDUser', ParseIntPipe) IDUser: number,
    @Body() users: UpdateUsersDto,
  ) {
    return this.userService.updateUser(IDUser, users)
  }
}
