import { Injectable } from '@nestjs/common';
import { Panda } from './panda.interface';
import { Status } from './panda.types';
import { DbService } from './db.service';

@Injectable()
export class PandasService {
  constructor(private dbService: DbService) {}

  // private readonly pandas: Panda[] = [
  //   {
  //     age: 5,
  //     id: 1,
  //     name: 'panda1',
  //     softness: 10,
  //   },
  //   {
  //     age: 3,
  //     id: 2,
  //     name: 'panda2',
  //     softness: 10,
  //   },
  // ];

  async create(panda: Panda) {
    // this.pandas.push(panda);
    await this.dbService.panda.create({ data: panda });
    return { status: Status.OK };
  }

  async findAll(): Promise<Panda[]> {
    // return this.pandas;
    return await this.dbService.panda.findMany();
  }

  getOne(id: number): Promise<Panda> {
    // return this.pandas.find((p) => p.id === +id);
    return this.dbService.panda.findFirst({
      where: { id },
    });
  }
}
