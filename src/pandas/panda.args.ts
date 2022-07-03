import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AddPandaArgs {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  softness: number;
}
