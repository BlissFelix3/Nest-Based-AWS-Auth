import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { id: 1, username: 'john', password: 'password' }, // Replace with your actual user data
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
