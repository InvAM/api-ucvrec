import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NivelAcademico } from './nivelacademico.entity';
import { Repository } from 'typeorm';
import { CreateNivelAcademicoDto } from './dto/create-nivelacademico.dto';

@Injectable()
export class NivelacademicoService {
  constructor(
    @InjectRepository(NivelAcademico) private NivelAcademicoRepository: Repository<NivelAcademico>,
  ) {}

  createNivelAcademico(NivelAcademico: CreateNivelAcademicoDto) {
    const newGen = this.NivelAcademicoRepository.create(NivelAcademico);
    this.NivelAcademicoRepository.save(newGen);
  }

  getNivelAcademico() {
    return this.NivelAcademicoRepository.find();
  }

  getNivelAcademicoOne(IDNivelAcademico: number) {
    return this.NivelAcademicoRepository.findOne({
      where: {
        IDNivelAcademico,
      },
    });
  }
}
