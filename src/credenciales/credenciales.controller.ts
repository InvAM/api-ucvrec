import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CredencialesService } from './credenciales.service';
import { CreateCredencialesDto } from './dto/create-credenciales.dto';
import { validate } from 'class-validator';
import { Credenciales } from './credenciales.entity';
import { UpdateCredencialesDto } from './dto/update-credenciales.dto';

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

  @Get(':username')
  getCredencialOne(@Param('username') username: string):Promise<Credenciales>{
    return this.credencialesService.findOneByUser(username);
  }

  @Patch('update-password')
  async updatePassword(@Body() updatePasswordDto: UpdateCredencialesDto) {
    try {
      return await this.credencialesService.updatePassword(updatePasswordDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
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
