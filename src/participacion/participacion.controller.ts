import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParticipacionService } from './participacion.service';
import { CreateParticipacionDto } from './dto/create-participacion.dto';
import { Participacion } from './participacion.entity';

@Controller('participacion')
export class ParticipacionController {
  constructor(private participacionService: ParticipacionService) {}
  @Get()
  getParticipacion() {
    return this.participacionService.getParticipacion();
  }

  @Post()
  createParticipacion(@Body() newPar: CreateParticipacionDto) {
    return this.participacionService.createParticipacion(newPar);
  }

  @Get(':IDParticipacion')
  getParticipacionOne(
    @Param(':IDParticipacion') IDParticipacion: number,
  ): Promise<Participacion> {
    return this.participacionService.getParticipacionOne(IDParticipacion);
  }
}
