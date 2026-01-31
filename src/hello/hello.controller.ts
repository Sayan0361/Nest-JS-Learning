import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// dont write business logic here! Service is there for the logic part
// localhost:3000/hello
@Controller('hello')
export class HelloController {

    //  dependency injection : a design pattern where an object’s dependencies are provided to it, rather than the object creating them itself. 
    // you do NOT create the things you depend on. Someone else gives them to you.
    constructor(private readonly helloService: HelloService) {}

    // localhost:3000/hello : GET
    @Get()
    getNormalHello() : string{
        return this.helloService.getNormalHello();
    }

    // localhost:3000/hello/first-route : GET
    @Get('first-route') 
    getHello(): string {
        return this.helloService.getHello();
    }

    // Params
    // localhost:3000/hello/user/:name : GET
    @Get('user/:name')
    getHelloWithName(@Param('name') name: string): string {
        return this.helloService.getHelloWithName(name);
    }

    // Query params
    // localhost:3000/hello/query?name=MonkeyMan : GET
    @Get('query')
    getHelloWithQuery(@Query('name') name:string): string {
        return this.helloService.getHelloWithName(name || 'default');
    }
}
