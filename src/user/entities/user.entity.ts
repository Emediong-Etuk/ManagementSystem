import {Column ,Entity, OneToMany} from "typeorm"
import {Base} from "./base.entity"
import { Role } from "../../enum/role.enum";
import { Todolist } from "src/todolist/entities/todolist.entity";
import { userInfo } from "os";

@Entity()
export class User extends Base {

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;

    @Column({
        type:'enum',
        enum:Role,
        default:Role.user
    })
    role:Role;
    
   @OneToMany(()=> Todolist, (todo)=>todo.user) 
   todo:Todolist

  
}
