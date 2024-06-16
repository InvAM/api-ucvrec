import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Habilidadesbla } from './habilidadesbla.entity';
import { CreateHabilidadesblaDto } from './dto/create-habilidadesbla.dto';
import { Repository } from 'typeorm';

@Injectable()
export class HabilidadesblaService {
    constructor(
        @InjectRepository(Habilidadesbla)
        private HabilidadesblaRepository: Repository<Habilidadesbla>,
      ) {}
    
      createHabilidadesbla(Habilidadesbla: CreateHabilidadesblaDto) {
        const newGen = this.HabilidadesblaRepository.create(Habilidadesbla);
        this.HabilidadesblaRepository.save(newGen);
      }
    
      getHabilidadesbla() {
        return this.HabilidadesblaRepository.find();
      }
    
      getHabilidadesblaOne(IDHabilidadesbla: number) {
        return this.HabilidadesblaRepository.findOne({
          where: {
            IDHabilidadesbla,
          },
        });
      }
}
