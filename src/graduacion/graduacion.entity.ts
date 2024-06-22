import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Graduacion'})
export class Graduacion{
    @PrimaryColumn()
    IDGraduacion: number;

    @Column()
    Descripcion_Graduacion: string;

    @OneToMany(()=> Users,(users) => users.graduacion)
    users: Users[]
}