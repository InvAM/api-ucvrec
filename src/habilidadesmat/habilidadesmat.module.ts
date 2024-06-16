import { Module } from '@nestjs/common';
import { HabilidadesmatController } from './habilidadesmat.controller';
import { HabilidadesmatService } from './habilidadesmat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidadesmat } from './habilidadesmat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidadesmat])],
  controllers: [HabilidadesmatController],
  providers: [HabilidadesmatService],
})
export class HabilidadesmatModule {}
