import { Module } from '@nestjs/common';
import { AppControl, AppController } from './app.controller';
import { Appservice, AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Murun:fitness123@cluster0.drwdfkp.mongodb.net/test',
    ),
    UserModule,
  ],
  controllers: [AppController, AppControl],
  providers: [AppService, Appservice],
})
export class AppModule {}
