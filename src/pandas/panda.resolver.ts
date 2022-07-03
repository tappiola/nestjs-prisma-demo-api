import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Int,
  Mutation,
} from '@nestjs/graphql';
import { PandasService } from './panda.service';
import { CitiesService } from './city.service';
import { Panda } from './panda.model';
import { StatusResp } from './panda.types';
import { AddPandaArgs } from './panda.args';
import { City } from './city.model';

@Resolver((of) => Panda)
export class PandasResolver {
  constructor(
    private pandasService: PandasService,
    private citiesService: CitiesService,
  ) {}

  @Query((returns) => Panda, { name: 'panda', description: 'Panda query desc' })
  async getPanda(@Args('id', { type: () => Int }) id: number) {
    return this.pandasService.getOne(id);
  }

  @Query((returns) => [Panda], {
    name: 'pandas',
    description: 'Pandas query desc',
  })
  async getPandas() {
    return this.pandasService.findAll();
  }

  @Mutation((returns) => StatusResp)
  async addPanda(@Args() args: AddPandaArgs) {
    return this.pandasService.create(args);
  }

  @ResolveField((returns) => [City])
  async cities(@Parent() panda: Panda) {
    // return this.citiesService.findAll();
    return this.citiesService.find(panda.id);
  }
}
