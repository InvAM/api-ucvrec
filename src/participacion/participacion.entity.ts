import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Participacion'})
export class Participacion{
    @PrimaryGeneratedColumn()
    IDParticipacion: number;

    @Column()
    Descripcion_participacion: string;
}