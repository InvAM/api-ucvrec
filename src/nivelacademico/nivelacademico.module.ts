import { Module } from '@nestjs/common';
import { NivelacademicoController } from './nivelacademico.controller';
import { NivelacademicoService } from './nivelacademico.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelAcademico } from './nivelacademico.entity';

@Module({
  imports:[TypeOrmModule.forFeature([NivelAcademico])],
  controllers: [NivelacademicoController],
  providers: [NivelacademicoService]
})
export class NivelacademicoModule {}
