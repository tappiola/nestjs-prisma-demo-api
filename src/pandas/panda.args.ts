import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AddPandaArgs {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  softness: number;
}
