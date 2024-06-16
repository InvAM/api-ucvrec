import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NivelacademicoService } from './nivelacademico.service';
import { CreateNivelAcademicoDto } from './dto/create-nivelacademico.dto';
import { NivelAcademico } from './nivelacademico.entity';

@Controller('nivelacademico')
export class NivelacademicoController {
    constructor(private NivelAcademicoService: NivelacademicoService){}

    @Get()
    getNivelAcademico(){
        return this.NivelAcademicoService.getNivelAcademico();
    }

    @Post()
    createNivelAcademico(@Body() newGen: CreateNivelAcademicoDto){
        return this.NivelAcademicoService.createNivelAcademico(newGen);
    }

    @Get(':IDNivelAcademico')
    getNivelAcademicoOne(@Param('IDNivelAcademico') IDNivelAcademico: number):Promise<NivelAcademico>{
        return this.NivelAcademicoService.getNivelAcademicoOne(IDNivelAcademico);
    }
}
