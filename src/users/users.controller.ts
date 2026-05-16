import { Controller, Post, Body, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    const exists = this.usersService.findByEmail(dto.email);
    if (exists) {
      throw new ConflictException('Email already exists');
    }

    const user = this.usersService.create(dto.email, dto.password);
    const { password, ...result } = user;
    return result;
  }
}
