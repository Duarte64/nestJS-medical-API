import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthLogin.dto';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: AuthDto) {
    try {
      return await this.authService.register(user);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  @Post('login')
  async login(@Body() user: AuthDto) {
    try {
      return await this.authService.login(user);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
