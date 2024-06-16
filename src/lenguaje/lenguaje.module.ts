import { Module } from '@nestjs/common';
import { LenguajeController } from './lenguaje.controller';
import { LenguajeService } from './lenguaje.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lenguaje } from './lenguaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],
  controllers: [LenguajeController],
  providers: [LenguajeService],
})
export class LenguajeModule {}
