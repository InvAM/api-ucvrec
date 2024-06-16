import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { GeneroModule } from 'src/genero/genero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { GraduacionModule } from 'src/graduacion/graduacion.module';
import { CicloModule } from 'src/ciclo/ciclo.module';

@Module({
  imports:[TypeOrmModule.forFeature([Users]),GeneroModule, GraduacionModule, CicloModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
