import { Module } from '@nestjs/common';
import { InteresController } from './interes.controller';
import { InteresService } from './interes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interes } from './interes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interes])],
  controllers: [InteresController],
  providers: [InteresService],
})
export class InteresModule {}
