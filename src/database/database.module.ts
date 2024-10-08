import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { dataSourceOptions } from 'config/typeorm';

@Module({
    imports:[
        TypeOrmModule.forRoot(dataSourceOptions),
        ConfigModule.forRoot({isGlobal:true})
    ]
})
export class DatabaseModule {}
