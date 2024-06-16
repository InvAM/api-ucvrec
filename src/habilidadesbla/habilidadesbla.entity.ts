import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Habilidadesbla'})
export class Habilidadesbla{
    @PrimaryGeneratedColumn()
    IDHabilidadesbla: number;

    @Column()
    Descripcion_Habilidadesbla: string;

}