import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Genero'})
export class Genero{
    @PrimaryGeneratedColumn()
    IDGenero: number;

    @Column()
    Descripcion_Genero: string;

    @OneToMany(()=> Users,(users) => users.genero)
    users: Users[]
}