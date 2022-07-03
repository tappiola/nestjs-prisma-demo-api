import { Field, ObjectType } from '@nestjs/graphql';
import { City } from './city.model';

@ObjectType()
export class CitiesResp {
  @Field(() => [City])
  cities: City[];
}
