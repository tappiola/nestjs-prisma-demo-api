import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Panda {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  age?: number;

  @Field((type) => Int)
  softness: number;
}
