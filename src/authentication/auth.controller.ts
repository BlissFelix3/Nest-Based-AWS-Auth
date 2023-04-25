import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // Use the LocalAuthGuard to protect this route
  @Post('login')
  async login(
    @Body() loginData: { username: string; password: string },
  ): Promise<any> {
    // Call your authentication service to handle login logic
    // For example, you can call authService.login(loginData.username, loginData.password)
    // and return the result to the client
  }

  @UseGuards(LocalAuthGuard) // Use the LocalAuthGuard to protect this route
  @Post('protected')
  async protectedRoute(): Promise<any> {
    // This route will only be accessible if the user is authenticated
    // You can implement your protected route logic here
  }
}
