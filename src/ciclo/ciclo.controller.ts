import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { Ciclo } from './ciclo.entity';

@Controller('ciclo')
export class CicloController {
  constructor(private cicloService: CicloService) {}

  @Get()
  getCiclo() {
    return this.cicloService.getCiclo();
  }

  @Post()
  createCiclo(@Body() newCil: CreateCicloDto) {
    return this.cicloService.createCiclo(newCil);
  }

  @Get(':IDCiclo')
  getCicloOne(@Param('IDCiclo') IDCiclo: number): Promise<Ciclo> {
    return this.cicloService.getCicloOne(IDCiclo);
  }
}
