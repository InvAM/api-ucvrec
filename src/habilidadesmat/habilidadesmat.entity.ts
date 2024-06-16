import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Habilidadesmat'})
export class Habilidadesmat{
    @PrimaryGeneratedColumn()
    IDHabilidadesmat: number;

    @Column()
    Descripcion_Habilidadesmat: string;

}