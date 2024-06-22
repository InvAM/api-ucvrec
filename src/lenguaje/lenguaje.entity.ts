import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Lenguaje'})
export class Lenguaje{
    @PrimaryColumn()
    IDLenguaje: number;

    @Column()
    Descripcion_Lenguaje: string;

}