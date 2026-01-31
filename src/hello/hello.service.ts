import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    getNormalHello(): string {
        return "Hello without any extra params"
    }
    getHello(): string{
        return "Hello from SERVICE";
    }
    getHelloWithName(name:string) : string {
        return `Hello from ${name}!`;
    }
}
