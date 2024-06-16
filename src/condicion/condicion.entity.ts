import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Condicion'})
export class Condicion{
    @PrimaryGeneratedColumn()
    IDCondicion: number;

    @Column()
    Descripcion_Condicion: string;

}