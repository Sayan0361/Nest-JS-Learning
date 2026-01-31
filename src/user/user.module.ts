import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HelloModule } from 'src/hello/hello.module';

@Module({
  imports: [HelloModule], // we will use HelloService in UserService, so import HelloModule first
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
