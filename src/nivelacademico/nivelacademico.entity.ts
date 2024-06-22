import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'NivelAcademico'})
export class NivelAcademico{
    @PrimaryColumn()
    IDNivelAcademico: number;

    @Column()
    Descripcion_NivelAcademico: string;
}