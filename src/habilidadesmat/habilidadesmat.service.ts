import { Injectable } from '@nestjs/common';
import { Habilidadesmat } from './habilidadesmat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHabilidadesmatDto } from './dto/create-habilidadesmat.dto';

@Injectable()
export class HabilidadesmatService {
  constructor(
    @InjectRepository(Habilidadesmat)
    private HabilidadesmatRepository: Repository<Habilidadesmat>,
  ) {}

  createHabilidadesmat(Habilidadesmat: CreateHabilidadesmatDto) {
    const newGen = this.HabilidadesmatRepository.create(Habilidadesmat);
    this.HabilidadesmatRepository.save(newGen);
  }

  getHabilidadesmat() {
    return this.HabilidadesmatRepository.find();
  }

  getHabilidadesmatOne(IDHabilidadesmat: number) {
    return this.HabilidadesmatRepository.findOne({
      where: {
        IDHabilidadesmat,
      },
    });
  }
}
