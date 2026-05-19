import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId: number = 1;

  findByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }

  async create(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = {
      id: this.nextId++,
      email: email,
      password: hashedPassword,
    };
    this.users.push(user);
    return user;
  }

  //   create(email: string, password: string): User {
  //     const user: User = {
  //       id: this.nextId++,
  //       email,
  //       password,
  //     };
  //     this.users.push(user);
  //     return user;
  //   }
}
