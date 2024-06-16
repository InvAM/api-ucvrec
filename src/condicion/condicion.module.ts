import { Module } from '@nestjs/common';
import { CondicionController } from './condicion.controller';
import { CondicionService } from './condicion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Condicion } from './condicion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Condicion])],
  controllers: [CondicionController],
  providers: [CondicionService]
})
export class CondicionModule {}
