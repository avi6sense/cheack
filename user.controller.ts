import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    //const { password } = createUserDto;
    return await this.userService.createUser(
      createUserDto.fname,
      createUserDto.lname,
      createUserDto.email,
      createUserDto.password,
      createUserDto.address,
      createUserDto.userType,
    );
  }
}
