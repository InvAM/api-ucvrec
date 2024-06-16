import { Module } from '@nestjs/common';
import { HabilidadesprgController } from './habilidadesprg.controller';
import { HabilidadesprgService } from './habilidadesprg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidadesprg } from './habilidadesprg.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Habilidadesprg])],
  controllers: [HabilidadesprgController],
  providers: [HabilidadesprgService]
})
export class HabilidadesprgModule {}
