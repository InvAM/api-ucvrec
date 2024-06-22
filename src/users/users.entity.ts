import { Ciclo } from 'src/ciclo/ciclo.entity';
import { Credenciales } from 'src/credenciales/credenciales.entity';
import { Genero } from 'src/genero/genero.entity';
import { Graduacion } from 'src/graduacion/graduacion.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn()
  IDUser: number;

  @Column()
  Nombre: string;

  @Column()
  Apellido: string;

  @Column()
  Edad: number;

  @Column()
  DNI: string;

  @Column()
  IDGenero: number;
  @ManyToOne(() => Genero, (genero) => genero.users)
  @JoinColumn({ name: 'IDGenero' })
  genero: Genero;

  @Column()
  IDGraduacion: number;
  @ManyToOne(() => Graduacion, (graduacion) => graduacion.users)
  @JoinColumn({ name: 'IDGraduacion' })
  graduacion: Graduacion;

  @Column()
  IDCiclo: number;
  @ManyToOne(() => Ciclo, (ciclo) => ciclo.users)
  @JoinColumn({ name: 'IDCiclo' })
  ciclo: Ciclo;

  @OneToOne(() => Credenciales, (credenciales) => credenciales.users)
  credenciales: Credenciales;

  @Column()
  IDia: string;
}
