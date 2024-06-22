import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Habilidadesbla'})
export class Habilidadesbla{
    @PrimaryColumn()
    IDHabilidadesbla: number;

    @Column()
    Descripcion_Habilidadesbla: string;

}