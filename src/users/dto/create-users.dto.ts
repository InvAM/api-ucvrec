import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUsersDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Nombre: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Apellido: string;

  DNi: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Edad: number;

  @IsNumber()
  IDGenero: number;

  @IsNumber()
  IDGraduacion: number;

  @IsNumber()
  IDCiclo: number;
}
