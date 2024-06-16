import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Lenguaje'})
export class Lenguaje{
    @PrimaryGeneratedColumn()
    IDLenguaje: number;

    @Column()
    Descripcion_Lenguaje: string;

}