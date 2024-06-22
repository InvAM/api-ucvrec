import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class UpdateUsersDto {
  Nombre?: string;

  Apellido?: string;

  Edad?: number;

  IDGenero?: number;

  IDGraduacion?: number;

  IDCiclo?: number;

  IDia?: string;
}
