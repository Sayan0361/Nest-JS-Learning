import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
    // Dependency Injection : injecting service from HelloModule
    // HelloModule must export HelloService
    // UserModule must import HelloModule
    constructor(private readonly helloService: HelloService){}

    getAllUsers() {
        return [
            {
                id: 1,
                name: "Sayan"
            },
            {
                id: 2,
                name: "Rahul"
            },
            {
                id: 3,
                name: "Riya"
            },
        ]
    }

    getUserById(id: number){
        const user = this.getAllUsers().find(user => user.id === id);
        return user;
    }

    getWelcomeMessage(userId: number) {
        const user = this.getUserById(userId);
        if(!user) {
            return "User Not Found babes";
        }
        return this.helloService.getHelloWithName(user?.name);
    }   
}
