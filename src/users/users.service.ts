import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {

    private users: User[] = [];
    private nextId: number = 1;


    findByEmail(email:string): User | undefined {
        return this.users.find(u => u.email === email);
    }

    create(email: string, password:string): User{
        const user: User = {
            id: this.nextId++,
            email, password
        }
        this.users.push(user);
        return user;

    }









}
