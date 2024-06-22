import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Habilidadesmat'})
export class Habilidadesmat{
    @PrimaryColumn()
    IDHabilidadesmat: number;

    @Column()
    Descripcion_Habilidadesmat: string;

}