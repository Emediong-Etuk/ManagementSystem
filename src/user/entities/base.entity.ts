import {Entity,CreateDateColumn, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Base{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @CreateDateColumn()
    createDate: Date
}