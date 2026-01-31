import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    // Dependency Injection
    constructor(private readonly userService: UserService){}

    // localhost:3000/user
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    // localhost:3000/user/:id
    @Get(':id')
    getUserById(@Param("id", ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }

    // localhost:3000/user/:id/welcome
    @Get(':id/welcome')
    getWelcomeMessage(@Param("id", ParseIntPipe) id: number) : string {
        return this.userService.getWelcomeMessage(id);
    }
}
