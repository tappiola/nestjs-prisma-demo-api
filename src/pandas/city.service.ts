import { Injectable } from '@nestjs/common';
import { City } from './city.interface';
import { Status } from './panda.types';

@Injectable()
export class CitiesService {
  private readonly cities: City[] = [
    { id: 1, name: 'London', pandaId: 1 },
    { id: 2, name: 'Edinburgh', pandaId: 2 },
    { id: 3, name: 'Berlin', pandaId: 2 },
  ];

  create(panda: City) {
    this.cities.push(panda);
    return { status: Status.OK };
  }

  findAll(): City[] {
    return this.cities;
  }

  find(id: number): City[] {
    return this.cities.filter(({ pandaId }) => pandaId === id);
  }

  getOne(id: number): City {
    return this.cities.find((p) => p.id === id);
  }
}
