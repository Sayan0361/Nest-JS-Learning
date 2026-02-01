import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the configmodule globally available. helps to load .env files
      // validationSchema: joi.object({ 
      //   APP_NAME : joi.string().default('defaultApp'), // but here I'm using app.config.ts for the validation stuff
      // }),
      load: [appConfig],
  }), HelloModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
