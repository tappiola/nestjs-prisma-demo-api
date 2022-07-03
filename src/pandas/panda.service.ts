import { Injectable } from '@nestjs/common';
import { Panda } from './panda.interface';
import { Status } from './panda.types';

@Injectable()
export class PandasService {
  private readonly pandas: Panda[] = [
    {
      age: 5,
      id: 1,
      name: 'panda1',
      softness: 10,
    },
    {
      age: 3,
      id: 2,
      name: 'panda2',
      softness: 10,
    },
  ];

  create(panda: Panda) {
    this.pandas.push(panda);
    return { status: Status.OK };
  }

  findAll(): Panda[] {
    return this.pandas;
  }

  getOne(id: number): Panda {
    return this.pandas.find((p) => p.id === +id);
  }

  getFirst(): Panda {
    return this.pandas[0];
  }
}
