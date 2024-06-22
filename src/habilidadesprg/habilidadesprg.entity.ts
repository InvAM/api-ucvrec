import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Habilidadesprg'})
export class Habilidadesprg{
    @PrimaryColumn()
    IDHabilidadesprg: number;

    @Column()
    Descripcion_Habilidadesprg: string;

}