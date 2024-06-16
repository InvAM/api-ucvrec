import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Graduacion'})
export class Graduacion{
    @PrimaryGeneratedColumn()
    IDGraduacion: number;

    @Column()
    Descripcion_Graduacion: string;

    @OneToMany(()=> Users,(users) => users.graduacion)
    users: Users[]
}