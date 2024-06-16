import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participacion } from './participacion.entity';
import { Repository } from 'typeorm';
import { CreateParticipacionDto } from './dto/create-participacion.dto';

@Injectable()
export class ParticipacionService {
  constructor(
    @InjectRepository(Participacion)
    private participacionRepository: Repository<Participacion>,
  ) {}
  createParticipacion(participacion: CreateParticipacionDto) {
    const newGen = this.participacionRepository.create(participacion);
    this.participacionRepository.save(newGen);
  }

  getParticipacion() {
    return this.participacionRepository.find();
  }

  getParticipacionOne(IDParticipacion: number) {
    return this.participacionRepository.findOne({
      where: {
        IDParticipacion,
      },
    });
  }
}
