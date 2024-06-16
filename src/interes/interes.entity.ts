import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Interes'})
export class Interes{
    @PrimaryGeneratedColumn()
    IDInteres: number;

    @Column()
    Descripcion_Interes: string;
}