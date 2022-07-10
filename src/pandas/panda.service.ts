import { Injectable } from '@nestjs/common';
import { Panda } from './panda.interface';
import { Status } from './panda.types';
import { DbService } from './db.service';

@Injectable()
export class PandasService {
  constructor(private dbService: DbService) {}

  async create(panda: Panda) {
    await this.dbService.panda.create({ data: panda });
    return { status: Status.OK };
  }

  async findAll(): Promise<Panda[]> {
    return await this.dbService.panda.findMany();
  }

  getOne(id: number): Promise<Panda> {
    return this.dbService.panda.findFirst({
      where: { id },
    });
  }
}
