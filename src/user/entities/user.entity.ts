import {Column ,Entity} from "typeorm"
import {Base} from "./base.entity"
import { Role } from "../../enum/role.enum";

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
    
    // role:string;
}
