import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { Todolist } from './entities/todolist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Todolist]), UserModule
  ],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}
