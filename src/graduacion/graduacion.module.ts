import { Module } from '@nestjs/common';
import { GraduacionController } from './graduacion.controller';
import { GraduacionService } from './graduacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduacion } from './graduacion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Graduacion])],
  controllers: [GraduacionController],
  providers: [GraduacionService],
  exports: [GraduacionService]
})
export class GraduacionModule {}
