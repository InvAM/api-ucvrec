import { Module } from '@nestjs/common';
import { CredencialesController } from './credenciales.controller';
import { CredencialesService } from './credenciales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credenciales } from './credenciales.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Credenciales]), UsersModule],
  controllers: [CredencialesController],
  providers: [CredencialesService]
})
export class CredencialesModule {}
