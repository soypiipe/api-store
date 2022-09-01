import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { User } from './../../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './../../dtos/users.dto';
import { UsersService } from './../../services/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    findAll(): User[] {
        return this.usersService.findAll()
    }

    @Get(':id')
    getUserById(@Param('id') id: number): User {
        return this.usersService.findOne(id)
    }

    @Post()
    createUser(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
        return this.usersService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }
}
