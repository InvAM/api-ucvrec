import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GraduacionService } from './graduacion.service';
import { CreateGraduacionDto } from './dto/create-graduacion.dto';
import { Graduacion } from './graduacion.entity';

@Controller('graduacion')
export class GraduacionController {
  constructor(private graduacionService: GraduacionService) {}

  @Get()
  getGraduacion() {
    return this.graduacionService.getGraduacion();
  }

  @Post()
  createGraduacion(@Body() newGra: CreateGraduacionDto) {
    return this.graduacionService.createGraduacion(newGra);
  }

  @Get(':IDGraduacion')
  getGraduacionOne(
    @Param(':IDGraduacion') IDGraduacion: number,
  ): Promise<Graduacion> {
    return this.graduacionService.getGraduacionOne(IDGraduacion);
  }
}
