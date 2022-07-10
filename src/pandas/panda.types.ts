import { Field, ObjectType } from '@nestjs/graphql';

export enum Status {
  OK = 'OK',
  FAIL = 'FAIL',
}

@ObjectType()
export class StatusResp {
  @Field()
  status: Status;
}
