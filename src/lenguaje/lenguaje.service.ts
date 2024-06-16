import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lenguaje } from './lenguaje.entity';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';

@Injectable()
export class LenguajeService {
  constructor(
    @InjectRepository(Lenguaje)
    private LenguajeRepository: Repository<Lenguaje>,
  ) {}

  createLenguaje(Lenguaje: CreateLenguajeDto) {
    const newGen = this.LenguajeRepository.create(Lenguaje);
    this.LenguajeRepository.save(newGen);
  }

  getLenguaje() {
    return this.LenguajeRepository.find();
  }

  getLenguajeOne(IDLenguaje: number) {
    return this.LenguajeRepository.findOne({
      where: {
        IDLenguaje,
      },
    });
  }
}
