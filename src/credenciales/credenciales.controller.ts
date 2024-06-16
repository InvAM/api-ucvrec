import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CredencialesService } from './credenciales.service';
import { CreateCredencialesDto } from './dto/create-credenciales.dto';
import { validate } from 'class-validator';

@Controller('credenciales')
export class CredencialesController {
  constructor(private credencialesService: CredencialesService) {}

  @Post()
  createCredenciales(@Body() credenciales: CreateCredencialesDto) {
    return this.credencialesService.createCredenciales(credenciales);
  }

  @Get()
  getCredenciales() {
    return this.credencialesService.getCredenciales();
  }

  @Post('validar')
  async validarCredenciales(
    @Body(new ValidationPipe()) credenciales: CreateCredencialesDto,
  ) {
    const errors = await validate(credenciales);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return this.credencialesService.validarCredenciales(
      credenciales.username,
      credenciales.password,
    );
  }
}
