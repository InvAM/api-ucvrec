import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Interes'})
export class Interes{
    @PrimaryColumn()
    IDInteres: number;

    @Column()
    Descripcion_Interes: string;
}