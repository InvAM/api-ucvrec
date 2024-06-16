import { Module } from '@nestjs/common';
import { ParticipacionController } from './participacion.controller';
import { ParticipacionService } from './participacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participacion } from './participacion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Participacion])],
  controllers: [ParticipacionController],
  providers: [ParticipacionService]
})
export class ParticipacionModule {}
