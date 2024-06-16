import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciclo } from './ciclo.entity';
import { CreateCicloDto } from './dto/create-ciclo.dto';

@Injectable()
export class CicloService {
  constructor(
    @InjectRepository(Ciclo) private cicloRepository: Repository<Ciclo>,
  ) {}

  createCiclo(ciclo: CreateCicloDto) {
    const newCil = this.cicloRepository.create(ciclo);
    this.cicloRepository.save(newCil);
  }

  getCiclo() {
    return this.cicloRepository.find();
  }

  getCicloOne(IDCiclo: number) {
    return this.cicloRepository.findOne({
      where: { IDCiclo },
    });
  }
}
