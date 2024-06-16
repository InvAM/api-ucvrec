import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Habilidadesprg'})
export class Habilidadesprg{
    @PrimaryGeneratedColumn()
    IDHabilidadesprg: number;

    @Column()
    Descripcion_Habilidadesprg: string;

}