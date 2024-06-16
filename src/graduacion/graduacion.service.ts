import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Graduacion } from './graduacion.entity';
import { CreateGraduacionDto } from './dto/create-graduacion.dto';

@Injectable()
export class GraduacionService {
  constructor(
    @InjectRepository(Graduacion)
    private graduacionRepository: Repository<Graduacion>,
  ) {}

  createGraduacion(graduacion: CreateGraduacionDto) {
    const newGra = this.graduacionRepository.create(graduacion);
    this.graduacionRepository.save(newGra);
  }

  getGraduacion() {
    return this.graduacionRepository.find();
  }

  getGraduacionOne(IDGraduacion: number) {
    return this.graduacionRepository.findOne({
      where: { IDGraduacion },
    });
  }
}
