import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LenguajeService } from './lenguaje.service';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { Lenguaje } from './lenguaje.entity';

@Controller('lenguaje')
export class LenguajeController {
  constructor(private LenguajeService: LenguajeService) {}

  @Get()
  getLenguaje() {
    return this.LenguajeService.getLenguaje();
  }

  @Post()
  createLenguaje(@Body() newGen: CreateLenguajeDto) {
    return this.LenguajeService.createLenguaje(newGen);
  }

  @Get(':IDLenguaje')
  getLenguajeOne(
    @Param('IDLenguaje') IDLenguaje: number,
  ): Promise<Lenguaje> {
    return this.LenguajeService.getLenguajeOne(IDLenguaje);
  }
}
