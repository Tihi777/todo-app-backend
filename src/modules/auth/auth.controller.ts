import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async authorize(@Body() { email, password }) {
    const accessToken = this.authService.authorizeByCredentials(email, password);

    return { accessToken };
  }
}
