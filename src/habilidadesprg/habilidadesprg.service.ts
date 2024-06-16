import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Habilidadesprg } from './habilidadesprg.entity';
import { Repository } from 'typeorm';
import { CreateHabilidadesprgDto } from './dto/create-habilidadesprg.dto';

@Injectable()
export class HabilidadesprgService {
    constructor(
        @InjectRepository(Habilidadesprg) private HabilidadesprgRepository: Repository<Habilidadesprg>,
      ) {}
    
      createHabilidadesprg(Habilidadesprg: CreateHabilidadesprgDto) {
        const newGen = this.HabilidadesprgRepository.create(Habilidadesprg);
        this.HabilidadesprgRepository.save(newGen);
      }
    
      getHabilidadesprg() {
        return this.HabilidadesprgRepository.find();
      }
    
      getHabilidadesprgOne(IDHabilidadesprg: number) {
        return this.HabilidadesprgRepository.findOne({
          where: {
            IDHabilidadesprg,
          },
        });
      }
}
