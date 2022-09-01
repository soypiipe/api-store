import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dto';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            name: 'User 1',
            email: 'rueba@prueba.com',
            password: '123456',
            role: 'admin'
        },
        {
            id: 2,
            name: 'User 2',
            email: 'user2@prueba.com',
            password: '123456',
            role: 'user'
        }
    ];

    findAll(): User[] {
        return this.users.length > 0 ? this.users : [];
    }

    findOne(id: number): User {
        const user = this.users.find(user => user.id == id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    create(payload: CreateUserDto) {
        const newUser = {
            id: (this.users.length + 1),
            ...payload
        }
        this.users.push(newUser);

        return newUser;
    }

    update(id: number, payload: UpdateUserDto) {
        const user = this.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        this.users = this.users.map(user => user.id == id ? { ...user, ...payload } : user)

        return payload;
    }

    delete(id: number) {
        const user = this.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        this.users = this.users.filter(user => user.id != id)

        return {
            message: `User with id ${id} deleted`,
        };
    }
}
