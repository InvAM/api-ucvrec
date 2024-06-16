import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HabilidadesblaService } from './habilidadesbla.service';
import { CreateHabilidadesblaDto } from './dto/create-habilidadesbla.dto';
import { Habilidadesbla } from './habilidadesbla.entity';

@Controller('habilidadesbla')
export class HabilidadesblaController {
  constructor(private HabilidadesblaService: HabilidadesblaService) {}

  @Get()
  getHabilidadesbla() {
    return this.HabilidadesblaService.getHabilidadesbla();
  }

  @Post()
  createHabilidadesbla(@Body() newGen: CreateHabilidadesblaDto) {
    return this.HabilidadesblaService.createHabilidadesbla(newGen);
  }

  @Get(':IDHabilidadesbla')
  getHabilidadesblaOne(
    @Param('IDHabilidadesbla') IDHabilidadesbla: number,
  ): Promise<Habilidadesbla> {
    return this.HabilidadesblaService.getHabilidadesblaOne(IDHabilidadesbla);
  }
}
