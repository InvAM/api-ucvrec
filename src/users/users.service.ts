import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { GeneroService } from 'src/genero/genero.service';
import { GraduacionService } from 'src/graduacion/graduacion.service';
import { CicloService } from 'src/ciclo/ciclo.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private generoService: GeneroService,
    private graduacionService: GraduacionService,
    private cicloService: CicloService,
  ) {}

  async createUsers(users: CreateUsersDto) {
    const generoFound = await this.generoService.getGeneroOne(users.IDGenero);
    const graduacionFound = await this.graduacionService.getGraduacionOne(
      users.IDGraduacion,
    );
    const cicloFound = await this.cicloService.getCicloOne(
      users.IDCiclo,
    );

    if (!generoFound ) {
      return new HttpException(
        'Faltan datos: GENERO',
        HttpStatus.NOT_FOUND,
      );
    }
    if(!graduacionFound){
      return new HttpException('Faltan datos: Graduacion',HttpStatus.NOT_FOUND)
    }
    if(!cicloFound){
      return new HttpException('Faltan datos: Ciclo', HttpStatus.NOT_FOUND)
    }

    const newUser = this.userRepository.create(users);
    return this.userRepository.save(newUser);
  }

  getUser() {
    return this.userRepository.find({
      relations: ['genero', 'ciclo', 'graduacion',],
    });
  }

  getUserOne(IDUser: number) {
    return this.userRepository.findOne({
      where: { IDUser },
      relations: ['genero', 'ciclo', 'graduacion',],
    });
  }

  updateUser(IDUser: number, users:UpdateUsersDto){
    this.userRepository.update({IDUser}, users)
  }
}
