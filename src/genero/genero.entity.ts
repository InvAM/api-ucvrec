import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn} from "typeorm";

@Entity({name: 'Genero'})
export class Genero{
    @PrimaryColumn()
    IDGenero: number;

    @Column()
    Descripcion_Genero: string;

    @OneToMany(()=> Users,(users) => users.genero)
    users: Users[]
}