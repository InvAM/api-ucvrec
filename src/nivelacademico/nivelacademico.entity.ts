import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'NivelAcademico'})
export class NivelAcademico{
    @PrimaryGeneratedColumn()
    IDNivelAcademico: number;

    @Column()
    Descripcion_NivelAcademico: string;
}