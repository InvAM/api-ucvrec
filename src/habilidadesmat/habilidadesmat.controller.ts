import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HabilidadesmatService } from './habilidadesmat.service';
import { CreateHabilidadesmatDto } from './dto/create-habilidadesmat.dto';
import { Habilidadesmat } from './habilidadesmat.entity';

@Controller('habilidadesmat')
export class HabilidadesmatController {
  constructor(private HabilidadesmatService: HabilidadesmatService) {}

  @Get()
  getHabilidadesmat() {
    return this.HabilidadesmatService.getHabilidadesmat();
  }

  @Post()
  createHabilidadesmat(@Body() newGen: CreateHabilidadesmatDto) {
    return this.HabilidadesmatService.createHabilidadesmat(newGen);
  }

  @Get(':IDHabilidadesmat')
  getHabilidadesmatOne(
    @Param('IDHabilidadesmat') IDHabilidadesmat: number,
  ): Promise<Habilidadesmat> {
    return this.HabilidadesmatService.getHabilidadesmatOne(IDHabilidadesmat);
  }
}
