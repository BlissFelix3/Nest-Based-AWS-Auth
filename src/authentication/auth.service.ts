// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      // Return the user if username and password match
      return user;
    }
    return null;
  }
}
