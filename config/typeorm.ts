import {DataSource, DataSourceOptions} from 'typeorm'
import {ConfigService} from '@nestjs/config'
import {config} from 'dotenv'

config();

const configService= new ConfigService()

export const dataSourceOptions: DataSourceOptions=({
    type:'mysql',
    host:configService.getOrThrow('HOST'),
    port:configService.getOrThrow('PORT'),
    username:configService.getOrThrow('USERNAME'),
    password:configService.getOrThrow('PASSWORD'),
    database:configService.getOrThrow('DATABASE'),
    entities:['dist/**/*.entity.js'],
    migrations:['dist/config/migrations/*.js'],
    synchronize:false
})

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;