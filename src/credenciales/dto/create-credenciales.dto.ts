import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class CreateCredencialesDto {
  IDUser?:number

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  username: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  password: string;
}
