import { Module } from '@nestjs/common';
import { HabilidadesblaController } from './habilidadesbla.controller';
import { HabilidadesblaService } from './habilidadesbla.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidadesbla } from './habilidadesbla.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Habilidadesbla])],
  controllers: [HabilidadesblaController],
  providers: [HabilidadesblaService]
})
export class HabilidadesblaModule {}
