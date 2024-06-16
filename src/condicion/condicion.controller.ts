import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CondicionService } from './condicion.service';
import { CreateCondicionDto } from './dto/create-condicion.dto';
import { Condicion } from './condicion.entity';

@Controller('condicion')
export class CondicionController {
  constructor(private CondicionService: CondicionService) {}

  @Get()
  getCondicion() {
    return this.CondicionService.getCondicion();
  }

  @Post()
  createCondicion(@Body() newGen: CreateCondicionDto) {
    return this.CondicionService.createCondicion(newGen);
  }

  @Get(':IDCondicion')
  getCondicionOne(
    @Param('IDCondicion') IDCondicion: number,
  ): Promise<Condicion> {
    return this.CondicionService.getCondicionOne(IDCondicion);
  }
}
