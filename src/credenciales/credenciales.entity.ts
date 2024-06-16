import { Users } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Credenciales' })
export class Credenciales {
  @PrimaryColumn()
  IDUser: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(()=> Users,(users)=> users.credenciales)
  @JoinColumn({name:'IDUser'})
  users: Users
}
