import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Float)
  latitude: number;

  @Field((type) => Float)
  longitude: number;
}
