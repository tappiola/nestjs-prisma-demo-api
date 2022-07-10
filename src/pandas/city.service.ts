import { Injectable } from '@nestjs/common';
import { City } from './city.interface';
import { DbService } from './db.service';

@Injectable()
export class CitiesService {
  constructor(private dbService: DbService) {}

  private readonly cities: City[] = [
    { id: 1, name: 'London', pandaId: 1 },
    { id: 2, name: 'Edinburgh', pandaId: 2 },
    { id: 3, name: 'Berlin', pandaId: 2 },
  ];

  find(id: number): Promise<City[]> {
    return this.dbService.city.findMany({ where: { pandaId: id } });
  }
}
