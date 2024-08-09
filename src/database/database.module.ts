import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:(configService:ConfigService)=>({
                type:'mysql',
                host:configService.get('HOST'),
                port:configService.get<number>('PORT'),
                username:'root',
                password:configService.get('PASSWORD'),
                database:'management_system',
                autoLoadEntities:true,
                synchronize:true
            }),
            inject:[ConfigService]
        })
    ]
})
export class DatabaseModule {}
