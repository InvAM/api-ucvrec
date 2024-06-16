import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InteresService } from './interes.service';
import { CreateInteresDto } from './dto/interes.dto';
import { Interes } from './interes.entity';

@Controller('interes')
export class InteresController {
  constructor(private InteresService: InteresService) {}

  @Get()
  getInteres() {
    return this.InteresService.getInteres();
  }

  @Post()
  createInteres(@Body() newGen: CreateInteresDto) {
    return this.InteresService.createInteres(newGen);
  }

  @Get(':IDInteres')
  getInteresOne(@Param('IDInteres') IDInteres: number): Promise<Interes> {
    return this.InteresService.getInteresOne(IDInteres);
  }
}
