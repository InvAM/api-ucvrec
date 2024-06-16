import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GeneroModule } from './genero/genero.module';
import { GraduacionModule } from './graduacion/graduacion.module';
import { CicloModule } from './ciclo/ciclo.module';
import { CredencialesModule } from './credenciales/credenciales.module';
import { ParticipacionModule } from './participacion/participacion.module';
import { NivelacademicoModule } from './nivelacademico/nivelacademico.module';
import { HabilidadesprgModule } from './habilidadesprg/habilidadesprg.module';
import { HabilidadesmatModule } from './habilidadesmat/habilidadesmat.module';
import { CondicionModule } from './condicion/condicion.module';
import { LenguajeModule } from './lenguaje/lenguaje.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'JYF27',
      port: 1433,
      username: 'JYF27',
      password: '7131',
      database: 'ucvrec',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
        instanceName: 'SQL2022',
      },
    }),
    UsersModule,
    GeneroModule,
    GraduacionModule,
    CicloModule,
    CredencialesModule,
    ParticipacionModule,
    NivelacademicoModule,
    HabilidadesprgModule,
    HabilidadesmatModule,
    CondicionModule,
    LenguajeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
