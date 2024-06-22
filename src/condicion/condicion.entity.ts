import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Condicion'})
export class Condicion{
    @PrimaryColumn()
    IDCondicion: number;

    @Column()
    Descripcion_Condicion: string;

}