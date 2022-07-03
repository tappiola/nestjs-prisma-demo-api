import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
