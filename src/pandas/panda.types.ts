import { Field, ObjectType } from '@nestjs/graphql';

export enum Status {
  OK = 'OK',
  FAIL = 'FAIL',
}

export type StatusResponse = {
  status: Status;
};

@ObjectType()
export class StatusResp {
  @Field()
  status: Status;
}
