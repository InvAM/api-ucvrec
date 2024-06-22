import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Participacion'})
export class Participacion{
    @PrimaryColumn()
    IDParticipacion: number;

    @Column()
    Descripcion_participacion: string;
}