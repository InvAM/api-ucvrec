import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credenciales } from './credenciales.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateCredencialesDto } from './dto/create-credenciales.dto';

@Injectable()
export class CredencialesService {
  constructor(
    @InjectRepository(Credenciales)
    private credencialesRepository: Repository<Credenciales>,
    private userService: UsersService,
  ) {}

  async createCredenciales(credenciales: CreateCredencialesDto) {
    const userFound = await this.userService.getUserOne(credenciales.IDUser);
    if (!userFound) {
      return new HttpException('Revisar IDUser', HttpStatus.NOT_FOUND);
    }

    const newcre = this.credencialesRepository.create(credenciales);
    return this.credencialesRepository.save(newcre);
  }

  getCredenciales() {
    return this.credencialesRepository.find();
  }

  validarCredenciales(username: string, password: string) {
    return this.credencialesRepository.findOneOrFail({
      where: {
        username,
        password,
      },
    });
  }

  deleteCredenciales(IDUser: number) {
    return this.credencialesRepository.delete({ IDUser });
  }

  findOneByUser(username: string) {
    return this.credencialesRepository.findOneBy({ username });
  }
}
