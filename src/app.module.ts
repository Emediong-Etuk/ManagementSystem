import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TodolistModule } from './todolist/todolist.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), UserModule, TodolistModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
