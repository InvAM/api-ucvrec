import { Injectable } from '@nestjs/common';
import { Interes } from './interes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInteresDto } from './dto/interes.dto';

@Injectable()
export class InteresService {
  constructor(
    @InjectRepository(Interes) private InteresRepository: Repository<Interes>,
  ) {}

  createInteres(Interes: CreateInteresDto) {
    const newGen = this.InteresRepository.create(Interes);
    this.InteresRepository.save(newGen);
  }

  getInteres() {
    return this.InteresRepository.find();
  }

  getInteresOne(IDInteres: number) {
    return this.InteresRepository.findOne({
      where: {
        IDInteres,
      },
    });
  }
}
