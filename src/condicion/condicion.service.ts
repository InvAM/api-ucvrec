import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Condicion } from './condicion.entity';
import { Repository } from 'typeorm';
import { CreateCondicionDto } from './dto/create-condicion.dto';

@Injectable()
export class CondicionService {
    constructor(
        @InjectRepository(Condicion) private CondicionRepository: Repository<Condicion>,
      ) {}
    
      createCondicion(Condicion: CreateCondicionDto) {
        const newGen = this.CondicionRepository.create(Condicion);
        this.CondicionRepository.save(newGen);
      }
    
      getCondicion() {
        return this.CondicionRepository.find();
      }
    
      getCondicionOne(IDCondicion: number) {
        return this.CondicionRepository.findOne({
          where: {
            IDCondicion,
          },
        });
      }
}
