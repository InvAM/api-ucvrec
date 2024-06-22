import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Ciclo'})
export class Ciclo{
    @PrimaryColumn()
    IDCiclo: number;

    @Column()
    Descripcion_Ciclo: string;

    @OneToMany(()=> Users,(users) => users.ciclo)
    users: Users[]
}