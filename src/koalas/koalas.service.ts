import { Injectable } from '@nestjs/common';
import { Koala } from './koalas.interface';

@Injectable()
export class KoalasService {
  private readonly koalas: Koala[] = [];

  create(koala: Koala) {
    this.koalas.push(koala);
  }

  findAll(): Koala[] {
    return this.koalas;
  }

  getOne(id: string): Koala {
    return this.koalas.find((k) => k.id === +id);
  }

  getFirst(): Koala {
    return this.koalas[0];
  }
}
