import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HabilidadesprgService } from './habilidadesprg.service';
import { CreateHabilidadesprgDto } from './dto/create-habilidadesprg.dto';
import { Habilidadesprg } from './habilidadesprg.entity';

@Controller('habilidadesprg')
export class HabilidadesprgController {
    constructor(private HabilidadesprgService: HabilidadesprgService){}

    @Get()
    getHabilidadesprg(){
        return this.HabilidadesprgService.getHabilidadesprg();
    }

    @Post()
    createHabilidadesprg(@Body() newGen: CreateHabilidadesprgDto){
        return this.HabilidadesprgService.createHabilidadesprg(newGen);
    }

    @Get(':IDHabilidadesprg')
    getHabilidadesprgOne(@Param('IDHabilidadesprg') IDHabilidadesprg: number):Promise<Habilidadesprg>{
        return this.HabilidadesprgService.getHabilidadesprgOne(IDHabilidadesprg);
    }
}
