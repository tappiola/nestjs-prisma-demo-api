import { Injectable } from '@nestjs/common';
import { Panda } from './panda.interface';
import { Status } from './panda.types';

@Injectable()
export class PandasService {
  private readonly pandas: Panda[] = [];

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
