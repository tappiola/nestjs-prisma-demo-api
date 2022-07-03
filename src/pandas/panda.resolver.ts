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
import { Panda } from './panda.model';
import { Status, StatusResp, StatusResponse } from './panda.types';
import { AddPandaArgs } from './panda.args';

@Resolver((of) => Panda)
export class PandasResolver {
  constructor(
    private pandasService: PandasService, // private citiesService: CitiesService,
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

  // @ResolveField()
  // async posts(@Parent() panda: Panda) {
  //   const { id } = panda;
  //   return this.citiesService.findOne(id);
  // }
}
